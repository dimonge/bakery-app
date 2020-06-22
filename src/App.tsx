import React from "react";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Platform } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import HomeView from "./views/HomeView";

function App() {
  return (
    <PaperProvider>
      <React.Fragment>
        {Platform.OS === "web" ? (
          <style type="text/css">
            {`
            @font-face {
              font-family: 'MaterialCommunityIcons';
              src: url(${require("react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf")}) format('truetype');
            }
          `}
          </style>
        ) : null}
        <HomeView />
      </React.Fragment>
    </PaperProvider>
  );
}

export default App;
