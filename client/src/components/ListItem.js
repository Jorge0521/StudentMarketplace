import React from "react";

const ListItem = props => (
  <div className="item">
    {props.image && <img src={props.image} width="200px" height="200px" />}
    <h2>{props.title}</h2>
    <h3>{props.school}</h3>
    <p>{props.subtitle}</p>
  </div>
);

export default ListItem;
