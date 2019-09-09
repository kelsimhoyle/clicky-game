import React, { Component } from "react";
import manatees from "./manatee.json";
import images from "./images";
import ManateeCard from "./componenets/ManateeCard";
import Score from "./componenets/Score";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import "./App.css";

class App extends Component {
  state = {
    manatees,
    count: 0,
    highScore: 0,
    correct: null,
    gameLost: false
  }

  handleClick = (id) => {
    console.log(id);
    this.setState({
      manatees: this.state.manatees.map(manatee => {
        if (manatee.id === id) {
          manatee.clicked = true
        }
        return manatee;
      }),
      count: this.state.count + 1,
      highScore: (this.state.highScore < this.state.count + 1 ? this.state.count + 1 : this.state.highScore),
      correct: true,
      gameLost: false
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
      count: 0, 
      correct: false,
      gameLost: true
    })
  }

  render() {
    let shuffledManateees = this.shuffleCards(this.state.manatees);
    return (
      <>
        <Header />
        <Score score={this.state.count} highScore={this.state.highScore} correct={this.state.correct} />
        <main className="container">
          <div className="row">
            {shuffledManateees.map((manatee) => (
              <ManateeCard
                image={images[manatee.id - 1]}
                key={manatee.id}
                clicked={manatee.clicked}
                id={manatee.id}
                gameLost={this.state.gameLost}
                handleClick={this.handleClick}
                loseGame={this.loseGame}
              />
            ))}
          </div>
        </main>
        <Footer />
      </>

    );
  }
}

export default App;
