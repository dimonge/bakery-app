import * as React from "react";
import { Appbar } from "react-native-paper";

function CustomNavbar({ showAction, title }) {
  let actionContent = (
    <React.Fragment>
      <Appbar.Action icon="loop" onPress={() => console.log("loop")} />
      <Appbar.Action icon="filter" onPress={() => console.log("filter")} />
      <Appbar.Action
        icon="sort-alphabetical"
        onPress={() => console.log("sort-alphabetical")}
      />
    </React.Fragment>
  );
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
      {showAction ? actionContent : null}
    </Appbar.Header>
  );
}

CustomNavbar.defaultProps = {
  title: "Production Record",
  showAction: false,
};
export default CustomNavbar;
