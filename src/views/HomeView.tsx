import React, { FunctionComponent, useState } from "react";
import NavBar from "../components/NavBar";
import List from "../components/List";
import AddButton from "../components/AddButton";
import AddForm from "../components/AddForm";
import ListDetails from "../components/ListDetails";
import queryString from "query-string";

export interface HomeProps {}
const HomeView: FunctionComponent<{}> = () => {
  const query = queryString.parse(window.location.search);
  console.log("query: ", query);
  let content = null;
  const [selectedItem, setSelectedItem] = useState(null);
  const onSeletedItem = (value: any) => {
    setSelectedItem(value);
  };
  if (query.new) {
    content = (
      <React.Fragment>
        <NavBar title="Add new" />
        <AddForm />
      </React.Fragment>
    );
  } else if (selectedItem) {
    content = (
      <React.Fragment>
        <NavBar title="Item Details" showEdit={true} />
        <ListDetails item={selectedItem} />
      </React.Fragment>
    );
  } else if (query.id) {
    content = <AddForm id={query.id} />;
  } else {
    content = (
      <React.Fragment>
        <NavBar showAction={true} />
        <List onSelectRow={onSeletedItem} />
      </React.Fragment>
    );
  }
  return content;
};

export default HomeView;
