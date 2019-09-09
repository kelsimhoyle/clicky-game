import React from "react";
import "./style.css";

function Score(props) {
    return(
        <nav className="navbar sticky-top navbar-light bg-light">
        <h2>High Score: {props.highScore}</h2>
        {props.correct === null ? 
        (<h2>Click a manatee to start the game!</h2>) :
        (<h2>{props.correct ? "You guessed correctly!" : "You guessed incorrectly."}</h2>)}
        <h2>Current Score: {props.score}</h2>
        </nav>
    )
}

export default Score;