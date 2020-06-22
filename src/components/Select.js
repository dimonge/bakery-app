import * as React from "react";
import { Select } from "baseui/select";

import { PRODUCT_TYPE } from "../models/Product";

export default ({ onChange }) => {
  const [value, setValue] = React.useState([]);

  const _onChange = (params) => {
    setValue(params.value);
    onChange(params.value);
  };
  return (
    <Select
      options={Object.values(PRODUCT_TYPE)}
      value={value}
      placeholder="Select Product type"
      onChange={_onChange}
    />
  );
};
