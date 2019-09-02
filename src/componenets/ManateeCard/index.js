import React from "react";
import "./style.css";

function ManateeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} onClick={props.clicked ? props.loseGame : props.handleClick.bind(this, props.id)} />
      </div>
      {/* <span className="remove" onClick={props.deleteFriend.bind(this, props.id)}>𝘅</span> */}
    </div>
  );
}

export default ManateeCard;