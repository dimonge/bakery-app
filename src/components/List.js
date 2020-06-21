import React, { useState } from "react";
import { FlatList } from "react-native";
import { List as RNPList, TouchableRipple } from "react-native-paper";
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
    <FlatList
      style={{ flex: 1 }}
      data={rows}
      renderItem={renderItem}
      keyExtractor={extractKey}
    />
  );
}

export default List;
