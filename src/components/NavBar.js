import React from "react";
import { NavBar as AntNavBar, Icon } from "antd-mobile";

function NavBar() {
  return (
    <div>
      <AntNavBar
        mode="light"
        rightContent={[<Icon key="1" type="ellipsis" />]}
      ></AntNavBar>
    </div>
  );
}

export default NavBar;
