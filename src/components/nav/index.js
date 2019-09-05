import React from "react";
import "./style.css";

const nav = props => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="title">{props.children}</h1>
          <div className="row">
            <div className="col-lg-12">
          <div className="collapse navbar-collapse" id="navbarNav">
            <span>Click a Sailor Scout to gain points, but don't click the same image twice!</span>
          </div>
          </div>
          </div>
        </nav>
    </div>
  )
}



export default nav;
