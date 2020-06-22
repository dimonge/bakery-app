import React from "react";
import { List, Divider } from "react-native-paper";
import {
  API_FIELD_TYPE,
  API_FIELD_QUANTITY_PRODUCED,
  API_FIELD_QUANTITY_SOLD,
  API_FIELD_UNIT_PRICE,
  API_FIELD_EARNINGS,
  API_FIELD_DATE,
} from "../models/Product";

function ListDetails({ item }) {
  console.log("item", item);
  return (
    <React.Fragment>
      <List.Item title={API_FIELD_TYPE} description={item[API_FIELD_TYPE]} />
      <Divider />
      <List.Item title={API_FIELD_QUANTITY_PRODUCED} description={item[API_FIELD_QUANTITY_PRODUCED]} />
      <Divider />
      <List.Item title={API_FIELD_QUANTITY_SOLD} description={item[API_FIELD_QUANTITY_SOLD]} />
      <Divider />
      <List.Item title={API_FIELD_UNIT_PRICE} description={item[API_FIELD_UNIT_PRICE]} />
      <Divider />
      <List.Item title={API_FIELD_DATE} description={item[API_FIELD_DATE]} />
      <Divider />
      <List.Item title={API_FIELD_EARNINGS} description={item[API_FIELD_EARNINGS]} />
      <Divider />
    </React.Fragment>
  );
}

export default ListDetails;
