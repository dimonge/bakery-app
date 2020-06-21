import React, { useState } from "react";

import { FormControl } from "baseui/form-control";
import { DatePicker } from "baseui/datepicker";
import { Button } from "react-native-paper";
import { Input } from "baseui/input";
function AddForm({ id }) {
  const [state, setState] = useState({ products: {} });
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
        <Button mode="contained" onPress={() => (window.location.search = "")}>
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
