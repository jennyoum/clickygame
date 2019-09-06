import React from "react";
import "./style.css";

const ScoutsCard = props => (
        <div className="card">
            <img alt={props.id} src={props.image} id={props.id} onClick={()=> props.clickedCards(props.id)}/>
        </div>
  );


export default ScoutsCard; 
