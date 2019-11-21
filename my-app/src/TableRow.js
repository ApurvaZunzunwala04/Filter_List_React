import React from "react";

function TableRow(props) {
  let listItems;
  if (props.data != null && props.updated_data == null) {
    listItems = props.data.map((data, i) => (
      <tr key={i}>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.username}</td>
        <td>{data.website}</td>
      </tr>
    ));
  } else if (props.updated_data != null) {
    listItems = props.updated_data.map((data, i) => (
      <tr key={i}>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.username}</td>
        <td>{data.website}</td>
      </tr>
    ));
  } else {
    listItems = null;
  }
  return <tbody>{listItems}</tbody>;
}

export default TableRow;
