import React, { FunctionComponent, useState, useEffect } from "react";

import { ListView, Flex, Icon } from "antd-mobile";
import Statistics from "./Statistics";
import {API} from "aws-amplify"

export interface HomeProps {}

const ListItems: FunctionComponent<{}> = () => {  
  const dataSource = new ListView.DataSource({
    rowHasChanged: (row1: any, row2: any) => row1 !== row2
  })

  const [state, setState] = useState({
    data: [],
    dataSource,
    productsById: {},
    totalEarnings: 0,
    isLoading: true,
    height: document.documentElement.clientHeight * 3 / 4
  })

  useEffect(() => {
    async function getProducts() {
      const response = await API.get("productsapi", "/products", {})
      const data =  response.products
      let totalEarnings = 0
      const productsById = data.reduce((acc: any, product: any) => {
        totalEarnings += product.earnings
        return {...acc, [product.id]: product}
      }, {})
      setState({...state, data, dataSource: dataSource.cloneWithRows(productsById), totalEarnings})
    }
    getProducts()
  }, [])




  const separator = (sectionID: any, rowID: any) => (
    <div
      key={`${sectionID}-${rowID}`}
      style={{
        backgroundColor: '#F5F5F9',
        height: 8,
        borderTop: '1px solid #ECECED',
        borderBottom: '1px solid #ECECED',
      }}
    />
  );

    const row = (rowData: any, sectionID: any, rowID: any) => {
      return (
        <Flex direction="row">
        <Flex.Item style={{flex:"5"}}>
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
            }}
          >{rowData.product_type}</div>
          <div style={{ display: 'flex', padding: '15px 0' }}>
            <div style={{ lineHeight: 1 }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{rowData.date}</div>
              <div style={{  fontSize: '30px', color: '#FF6E27', marginBottom: '8px', fontWeight: 'bold' }}>{`N ${rowData.earnings}`}</div>
            </div>
          </div>
        </div>
        </Flex.Item>
        <Flex.Item style={{flex:"1", justifyContent: "flex-end"}}>
        <Icon type="right" size="lg" color='#888'/>
        </Flex.Item>
        </Flex>
      );
    };
  return (
    <div>
      
      <ListView        
        dataSource={state.dataSource}
        renderHeader={() => <div>
        <div style={{marginTop: 0}}>
        <Statistics data={state.totalEarnings}/>
        </div>      
      </div>}
        /*renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}*/
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        //onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    </div>
  );
};

export default ListItems
