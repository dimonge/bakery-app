import React from "react";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { NavBar } from "antd-mobile";

import HomeView from "./views/HomeView";
import TabBar from "./components/TabBar";

function App() {
  return (
    <div style={{ flex: 1, flexDirection: "column" }}>
      <HomeView />
    </div>
  );
}

export default withAuthenticator(App);
