import React from "react";
import { Tabs, WhiteSpace } from "antd-mobile";
import ListItems from "./ListItems";
import Statistics from "./Statistics";
import NavBar from "./NavBar";

class Filters extends React.Component {
  renderContent = (tab) => (
    <div>
      <NavBar />
      <ListItems />;
    </div>
  );

  render() {
    const tabs = [{ title: "All" }];

    return (
      <Tabs
        tabs={tabs}
        renderTabBar={(props) => <Tabs.DefaultTabBar {...props} page={3} />}
      >
        {this.renderContent}
      </Tabs>
    );
  }
}

export default Filters;
