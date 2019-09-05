import React from "react";
import "./style.css";

function ManateeCard(props) {
  return (
    <div className="col-md-3">
    <div className="card">
    <div className="img-container">
        <img alt={props.id} src={props.image} onClick={props.clicked ? props.loseGame : props.handleClick.bind(this, props.id)} />
        </div>
    </div>
    </div>
  );
}

export default ManateeCard;