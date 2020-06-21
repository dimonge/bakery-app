import React, { FunctionComponent, } from "react";
import NavBar from "../components/NavBar";
import List from "../components/List"
import AddButton from "../components/AddButton"
import AddForm from "../components/AddForm"
import queryString from "query-string"

export interface HomeProps {}
const HomeView: FunctionComponent<{}> = () => {  
  
  const query = queryString.parse(window.location.search)
  console.log("query: ", query)
  let content =  null

  if (query.new) {
    content = <React.Fragment>
      <NavBar title="Add new" />
      <AddForm />
      </React.Fragment>
  } else if (query.id) {
    content = <AddForm id={query.id} />
  } else {
    content = <React.Fragment>      
      <NavBar showAction={true}/>
      <List />
      <AddButton />
    </React.Fragment>
  }
  return content
};

export default HomeView;
