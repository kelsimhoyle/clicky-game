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

  loseGame = () => {
    this.setState({
      manatees: [...this.state.manatees.map(manatee => {
      manatee.clicked = false
      return manatee
      })],
      count: 0
    })
    console.log("game reset")
  }
  
  render() {return (
    <div>
    <h2>Score: {this.state.count}</h2>
      {this.state.manatees.map((manatee, index) => (
        <ManateeCard 
        image={images[index]} 
        key={manatee.id} 
        clicked={manatee.clicked} 
        id={manatee.id} 
        handleClick={this.handleClick}
        loseGame={this.loseGame}
        />
        ))}
    </div>

  );
  }
}

export default App;
