import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { List as RNPList, TouchableRipple } from "react-native-paper";
import { listProducts } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import AddButton from "./AddButton";
import SearchBar from "./Searchbar";

function List({ onSelectRow }) {
  const [rows, setRows] = useState(null);
  const extractKey = ({ id }) => id;

  async function getProducts() {
    API.graphql(graphqlOperation(listProducts)).then((evnt) => {
      setRows(evnt.data.listProducts.items);
    });
  }

  useEffect(() => {
    getProducts();
  }, []);
  const onPress = (item) => {
    onSelectRow(item);
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableRipple rippleColor="rgba(0, 0, 0, .32)" onPress={() => onPress(item)}>
        <RNPList.Item
          title={item.type}
          style={{ borderBottomWidth: 1, borderBottomColor: "grey" }}
          description={() => (
            <div>
              <div>{item.date}</div>
              <div>{item.earnings}</div>
            </div>
          )}
          right={(props) => <RNPList.Icon icon="chevron-right" />}
        />
      </TouchableRipple>
    );
  };

  return (
    <div style={{ position: "relative", height: "calc(100vh - 120px)" }}>
      <SearchBar />
      <FlatList style={{ flex: 1 }} data={rows} renderItem={renderItem} keyExtractor={extractKey} />
      <AddButton />
    </div>
  );
}

List.defaultProps = {
  onSelectRow: null,
};
export default List;
