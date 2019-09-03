import React, { Component } from "react";
import manatees from "./manatee.json";
import images from "./images";
import ManateeCard from "./componenets/ManateeCard";
import "./App.css";

class App extends Component {
  state = {
    manatees,
    count: 0
  }

  handleClick = (id) => {
    console.log(id);
    this.setState({
      manatees: this.state.manatees.map(manatee => {
        if (manatee.id === id) {
          manatee.clicked = true
        }
        console.log(manatee)
        return manatee;
      }),
      count: this.state.count + 1
    });
  }

  shuffleCards = (array) => {
    let currentIndex = array.length;
    let tempValue, randomIndex;

    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }
    return array;
  }

  loseGame = () => {
    this.setState({
      manatees: [...this.state.manatees.map(manatee => {
      manatee.clicked = false
      return manatee
      })],
      count: 0
    })

  }
  
  render() {
    let shuffledManateees = this.shuffleCards(this.state.manatees);
    return (
    <>
    <h2>Score: {this.state.count}</h2>
    <main className="container">
    <div className="row">
      {shuffledManateees.map((manatee) => (
        <ManateeCard 
        image={images[manatee.id - 1]} 
        key={manatee.id} 
        clicked={manatee.clicked} 
        id={manatee.id} 
        handleClick={this.handleClick}
        loseGame={this.loseGame}
        />
        ))}
        </div>
        </main>
    </>

  );
  }
}

export default App;
