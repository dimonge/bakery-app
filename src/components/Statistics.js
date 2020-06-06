import React from "react";
import { Card } from "antd-mobile";

function Statistics({ data }) {
  return (
    <Card>
      <Card.Body>
        <div>Total Earnings</div>
      </Card.Body>
      <Card.Footer content={data} />
    </Card>
  );
}

export default Statistics;
