import React, { Component } from "react";
import ScoutsCard from "./components/ScoutsCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/nav";
import image from "./scouts.json";

class App extends Component {
  state = {
    images: image,
    score: 0,
    topScore: 0,
    message: "",
    clicked: []
  }

clickedCards = id => {
  this.setState({score: this.state.score + 1 });
};

render() {
  return (
    <Wrapper>
    <Nav>
      Score:  {this.state.score}
      Top Score:  {this.state.topScore}
      Status:  {this.state.message}
    </Nav>
    <div>
      {this.state.images.map(card => ( <div><img src={card.image} alt={card.id}></img></div>))}
    </div>
    </Wrapper>
  );
};

};

export default App;
