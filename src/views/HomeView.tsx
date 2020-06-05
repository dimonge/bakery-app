import React, { FunctionComponent } from "react";
import TabBar from "../components/TabBar";
import { NavBar, Flex } from "antd-mobile";
export interface HomeProps {}

const HomeView: FunctionComponent<{}> = () => {
  return (
    <Flex direction="column">
      <NavBar mode="light">Bakery app</NavBar>
      <TabBar />
    </Flex>
  );
};

export default HomeView;
