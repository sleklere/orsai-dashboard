import React from "react";

function ChartRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>${props.price}</td>
      <td>{props.description}</td>
      <td>{props.image}</td>
      <td>{props.category}</td>
    </tr>
  );
}

export default ChartRow;
