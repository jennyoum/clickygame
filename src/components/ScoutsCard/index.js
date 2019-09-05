import React from "react";
import "./style.css";

const ScoutsCard = props => {
  return (
    <div>
    <div className="row">
      <div className="col-md-3">
        <div className="card">
          <div className="img-container">
            <img className="card-img" alt={props.id} src={props.image} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ScoutsCard;
