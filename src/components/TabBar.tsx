import React, { FunctionComponent, useState } from "react"
import {TabBar as AntTabBar} from "antd-mobile"

const TabBar:FunctionComponent<{}> = () => {
  const [state, setState] = useState({selectedTab: "home", hidden: false})

  const renderContent = () => {
    return <div>Render content here</div>
  }


  return <div>
    <AntTabBar unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={state.hidden}>
      <AntTabBar.Item 
        title="Home" 
        icon={
          <div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
          />}
        selectedIcon={
          <div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
          />}
        selected={state.selectedTab === "home"}
        onPress={() => console.log("home")}
        data-seed="logId"
        >
        {renderContent()}
      </AntTabBar.Item>
    </AntTabBar>
  </div>
}

export default TabBar