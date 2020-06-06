import React, { useState } from "react";
import { List, InputItem, NavBar } from "antd-mobile";
import { createForm } from "rc-form";
import Button from "./Button";

const isIPhone = new RegExp("\\biPhone\\b|\\biPod\\b", "i").test(
  window.navigator.userAgent
);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: (e) => e.preventDefault(),
  };
}

function AddForm({ form: { getFieldProps } }) {
  const [state, setState] = useState({ products: {} });

  const onChange = (v) => {
    setState({ ...state, v });
  };
  return (
    <div>
      <NavBar>Add Products</NavBar>
      <List>
        <InputItem
          {...getFieldProps("money3")}
          type={"string"}
          placeholder="Product type"
          clear
          onChange={(value) => onChange({ product_type: value })}
        >
          Product Type
        </InputItem>
        <InputItem
          type={"number"}
          placeholder="Quantity produced"
          clear
          onChange={(value) => onChange({ quantity_produced: value })}
          moneyKeyboardWrapProps={moneyKeyboardWrapProps}
        >
          Quantity Produced
        </InputItem>
        <InputItem
          type={"number"}
          placeholder="Quantity sold"
          clear
          onChange={(value) => onChange({ quantity_sold: value })}
          moneyKeyboardWrapProps={moneyKeyboardWrapProps}
        >
          Quantity Sold
        </InputItem>
        <InputItem
          type={"money"}
          placeholder="Unit price (in Naira)"
          clear
          onChange={(value) => onChange({ unit_price: value })}
          moneyKeyboardWrapProps={moneyKeyboardWrapProps}
        >
          Unit price (in Naira)
        </InputItem>
      </List>
      <InputItem
        type={"date"}
        placeholder="Date"
        clear
        onChange={(value) => onChange({ date: value })}
        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
      >
        Date
      </InputItem>
      <InputItem
        type={"money"}
        placeholder="Earnings in Naira"
        clear
        onChange={(value) => onChange({ earnings: value })}
        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
      >
        Earnings (in Naira)
      </InputItem>
      <Button>Cancel</Button>
      <Button>Save</Button>
    </div>
  );
}

export default createForm()(AddForm);
