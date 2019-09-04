import React, { Component } from "react";
import ScoutsCard from "./components/ScoutsCard";
import Wrapper from "./components/Wrapper";
import nav from "./components/nav";
import image from "./scouts.json";

class App extends Component {
  state = {
    images: image,
    score: 0,
    topScore: 0,
  }

clickedCards = id => {
  this.setState({score: this.state.score + 1 });
};

render() {
  return (
    <Wrapper>
    <div>
      <title>Choose your Sailor Scouts!</title>
    <div>
      {this.state.images.map(card => ( <div><img src={card.image} alt={card.id}></img></div>))}
    </div>
    </div>
    </Wrapper>
  );


};

};

export default App;
