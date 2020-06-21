import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { List as RNPList, TouchableRipple } from "react-native-paper";
import { listProducts } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import AddButton from "./AddButton";
const rows = [
  {
    id: 0,
    type: "Bread",
    quantityProduced: 200,
    quantitySold: 10,
    unitPrice: 40,
    date: "17/08/2020",
    earnings: 400,
  },
  {
    id: 1,
    type: "Bread",
    quantityProduced: 200,
    quantitySold: 10,
    unitPrice: 40,
    date: "17/08/2020",
    earnings: 400,
  },
  {
    id: 2,
    type: "Bread",
    quantityProduced: 200,
    quantitySold: 10,
    unitPrice: 40,
    date: "17/08/2020",
    earnings: 400,
  },
  {
    id: 3,
    type: "Bread",
    quantityProduced: 200,
    quantitySold: 10,
    unitPrice: 40,
    date: "17/08/2020",
    earnings: 400,
  },
];

function List() {
  const [selectedRow, setSelectedRow] = useState(null);
  const extractKey = ({ id }) => id;

  async function getProducts() {
    API.graphql(graphqlOperation(listProducts)).then((evnt) => {
      setSelectedRow(evnt.data.listProducts.items);
    });
  }

  useEffect(() => {
    getProducts();
  });

  const renderItem = ({ item }) => {
    return (
      <TouchableRipple
        rippleColor="rgba(0, 0, 0, .32)"
        onPress={() => setSelectedRow({ item })}
      >
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
    <div style={{ position: "relative", height: "calc(100vh - 50px)" }}>
      <FlatList
        style={{ flex: 1 }}
        data={selectedRow}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
      <AddButton />
    </div>
  );
}

export default List;
