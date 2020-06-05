import React, { FunctionComponent, useState } from "react"
import {TabBar as AntTabBar, Icon} from "antd-mobile"
import ListItems from "./ListItems"
import AddForm from "./AddForm"

const TabBar:FunctionComponent<{}> = () => {
  const [state, setState] = useState({selectedTab: "home", hidden: false})

  const renderContent = () => <ListItems />
  const renderForm = () => <AddForm />
  


  return <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
    <AntTabBar unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={state.hidden}>
      <AntTabBar.Item 
        title="Home" 
        icon={
          <Icon type="home" />}
        selectedIcon={<Icon type="home" color="grey" />}
        selected={state.selectedTab === "home"}
        onPress={() => console.log("home")}
        data-seed="logId"
        >
        {renderContent()}
      </AntTabBar.Item>

      <AntTabBar.Item 
        title="Add Item" 
        icon={<Icon type="add" />}
        selectedIcon={<Icon type="search" color="grey" />}
        selected={state.selectedTab === "add"}
        onPress={() => console.log("add")}
        data-seed="logId"
        >
        {renderForm()}
      </AntTabBar.Item>
    </AntTabBar>
  </div>
}

export default TabBar