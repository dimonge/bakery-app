import React, { FunctionComponent, } from "react";
import TabBar from "../components/TabBar";
import { Flex} from "antd-mobile";
import NavBar from "../components/NavBar";
export interface HomeProps {}


const HomeView: FunctionComponent<{}> = () => {  
  

  return (
    <Flex direction="column">
      
      
      <TabBar />
      
    </Flex>
  );
};

export default HomeView;
