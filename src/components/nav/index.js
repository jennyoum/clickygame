import React from "react";
import "./style.css";

function nav(props) {
  return <h1 className="title">{props.children}</h1>;
}

export default nav;
