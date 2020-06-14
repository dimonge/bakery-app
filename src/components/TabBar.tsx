import React, { FunctionComponent, useState } from "react"
import {TabBar as AntTabBar, Icon} from "antd-mobile"
import AddForm from "./AddForm"
import Filters from "./Filters"
import List from "./List"

const TabBar:FunctionComponent<{}> = () => {
  const [state, setState] = useState({selectedTab: "home", hidden: false})

  const renderContent = () => <Filters />
  const renderForm = () => <AddForm />
  const renderList = () => <List />
  const onPressTab = (tab: string) => {
    if (state.selectedTab !== tab) {
      setState({...state, selectedTab: tab})
    }
  }
// use icon from here https://iconify.design/icon-sets/ant-design/
  return <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
    <AntTabBar unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={state.hidden}>
      <AntTabBar.Item 
        title="Home" 
        icon={<Icon type="menu" />}
        selectedIcon={<Icon type="menu" color="grey" />}
        selected={state.selectedTab === "home"}
        onPress={() => onPressTab("home")}
        data-seed="logId"
        >
        {renderContent()}
      </AntTabBar.Item>

      <AntTabBar.Item 
        title="Add Products" 
        icon={<Icon type="plus" color="grey" />}
        selectedIcon={<Icon type="plus" color="grey" />}
        selected={state.selectedTab === "add"}
        onPress={() => onPressTab("add")}
        data-seed="logId"
        >
        {renderForm()}
      </AntTabBar.Item>

      <AntTabBar.Item 
        title="Add Products" 
        icon={<Icon type="plus" color="grey" />}
        selectedIcon={<Icon type="plus" color="grey" />}
        selected={state.selectedTab === "add"}
        onPress={() => onPressTab("add")}
        data-seed="logId"
        >
        {renderList()}
      </AntTabBar.Item>
    </AntTabBar>
  </div>
}

export default TabBar