import * as React from "react";
import { Appbar, Button } from "react-native-paper";

function CustomNavbar({ title, showAction, showEdit, onClickEdit }) {
  let actionContent = (
    <React.Fragment>
      <Appbar.Action icon="loop" onPress={() => console.log("loop")} />
      <Appbar.Action icon="filter" onPress={() => console.log("filter")} />
      <Appbar.Action icon="sort-alphabetical" onPress={() => console.log("sort-alphabetical")} />
    </React.Fragment>
  );
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
      {showAction ? actionContent : null}
      {showEdit ? (
        <Button mode="text" onPress={() => onClickEdit()}>
          Edit
        </Button>
      ) : null}
    </Appbar.Header>
  );
}

CustomNavbar.defaultProps = {
  title: "Production Record",
  showAction: false,
  showEdit: false,
  onClickEdit: null,
};
export default CustomNavbar;
