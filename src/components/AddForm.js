import React, { useState } from "react";
import { createProduct } from "../graphql/mutations";
import { FormControl } from "baseui/form-control";
import { DatePicker } from "baseui/datepicker";
import { Button } from "react-native-paper";
import { Input } from "baseui/input";
import { API, graphqlOperation } from "aws-amplify";

async function createNewProduct(product) {
  return await API.graphql(graphqlOperation(createProduct, { input: product }));
}

function AddForm({ id }) {
  const [state, setState] = useState({ products: {} });

  const onSave = () => {
    createNewProduct(state.products);
    window.location.search = "";
  };
  return (
    <div style={{ marginLeft: 16, marginRight: 16 }}>
      <FormControl label={() => "Quantity Produced"}>
        <Input />
      </FormControl>
      <FormControl label={() => "Quantity Sold"}>
        <Input />
      </FormControl>
      <FormControl label={() => "Unit price (Naira)"}>
        <Input startEnhancer="N" />
      </FormControl>
      <FormControl label={() => "Date"}>
        <DatePicker
          value={state.date}
          onChange={({ date }) =>
            setState({ ...state, date: Array.isArray(date) ? date : [date] })
          }
        />
      </FormControl>
      <FormControl label={() => "Earnings (Naira)"}>
        <Input startEnhancer="N" />
      </FormControl>
      <div>
        <Button mode="text" onPress={() => (window.location.search = "")}>
          Cancel
        </Button>
        <Button mode="contained" onPress={onSave}>
          Save
        </Button>
      </div>
    </div>
  );
}

AddForm.defaultProps = {
  id: null,
};
export default AddForm;
