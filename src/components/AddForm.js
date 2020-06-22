import React, { useState } from "react";
import { createProduct } from "../graphql/mutations";
import { FormControl } from "baseui/form-control";
import { StatefulDatePicker } from "baseui/datepicker";
import { Button } from "react-native-paper";
import { Input } from "baseui/input";
import { API, graphqlOperation } from "aws-amplify";
import { format } from "date-fns";
import {
  API_FIELD_QUANTITY_PRODUCED,
  API_FIELD_QUANTITY_SOLD,
  API_FIELD_UNIT_PRICE,
  API_FIELD_DATE,
  API_FIELD_TYPE,
  API_FIELD_EARNINGS,
} from "../models/Product";
import Select from "./Select";

async function createNewProduct(product) {
  return await API.graphql(graphqlOperation(createProduct, { input: product }));
}

const getValue = (event) => (!!event ? event.target.value : null);
function AddForm({ id }) {
  const [state, setState] = useState({});

  const onSave = () => {
    let earnings = null;
    console.log("state: ", state);
    if (state[API_FIELD_UNIT_PRICE] && state[API_FIELD_QUANTITY_SOLD]) {
      earnings = state[API_FIELD_UNIT_PRICE] * state[API_FIELD_QUANTITY_SOLD];
    }

    createNewProduct({ ...state, [API_FIELD_EARNINGS]: earnings })
      .then(() => {
        window.location.search = "";
      })
      .catch((error) => {
        window.location.search = "";
      });
  };

  const onChange = (field, value) => {
    console.log("onChange ", field, state.unitPrice, value);
    setState({ ...state, [field]: value });
  };
  const onSelectProductType = (value) => {
    const hasValue = value && value.length > 0;
    const type = hasValue ? value[0].id : null;
    const unitPrice = hasValue ? value[0].unitPrice : null;

    setState({
      ...state,
      [API_FIELD_TYPE]: type,
      [API_FIELD_UNIT_PRICE]: unitPrice,
    });
  };

  let earnings = null;
  console.log("state: ", state);
  if (state[API_FIELD_UNIT_PRICE] && state[API_FIELD_QUANTITY_SOLD]) {
    earnings = state[API_FIELD_UNIT_PRICE] * state[API_FIELD_QUANTITY_SOLD];
  }
  const isDisabled =
    !state[API_FIELD_TYPE] ||
    !state[API_FIELD_QUANTITY_PRODUCED] ||
    !state[API_FIELD_QUANTITY_SOLD] ||
    !state[API_FIELD_DATE];
  return (
    <div style={{ marginLeft: 16, marginRight: 16, marginTop: 16 }}>
      <FormControl label={() => "Product Type*"}>
        <Select required onChange={onSelectProductType} />
      </FormControl>
      <FormControl label={() => "Quantity Produced*"}>
        <Input required type="number" onChange={(evt) => onChange(API_FIELD_QUANTITY_PRODUCED, getValue(evt))} />
      </FormControl>
      <FormControl label={() => "Quantity Sold*"}>
        <Input required type="number" onChange={(evt) => onChange(API_FIELD_QUANTITY_SOLD, getValue(evt))} />
      </FormControl>
      <FormControl disabled label={() => "Unit price (Naira)"}>
        <Input type="number" step="0.01" startEnhancer="N" value={state[API_FIELD_UNIT_PRICE]} />
      </FormControl>
      <FormControl label={() => "Date*"}>
        <StatefulDatePicker
          required
          value={state.date}
          onChange={({ date }) => onChange(API_FIELD_DATE, format(date, "dd/MM/yyyy"))}
          formatString="dd/MM/yyyy"
          mask={null}
        />
      </FormControl>
      <FormControl disabled label={() => "Earnings (Naira)"}>
        <Input type="number" step="0.01" startEnhancer="N" value={earnings} />
      </FormControl>
      <div>
        <Button mode="text" onPress={() => (window.location.search = "")}>
          Cancel
        </Button>
        <Button mode="contained" onPress={onSave} disabled={isDisabled}>
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
