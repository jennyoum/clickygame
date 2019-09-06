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
  if( this.state.clicked.includes(id)){
    this.setState({clicked: [], score: +1, message: "Great job! Keep going!!!"});
  
  }
  this.setState({score: this.state.score + 1 });
  this.shuffleCards();
};

shuffleCards = id => {
  for (let i = 0; i > 12; i++){
    let shuffleOrder = Math.floor(Math.random() * 12)
    this.setState({shuffleOrder})
  }
};

render() {
  return (
    <Wrapper>
    <Nav>
      Score:  {this.state.score}
      <br></br>
      Top Score:  {this.state.topScore}
      <br></br>
      Status:  {this.state.message}
    </Nav>
    
      {this.state.images.map(card => ( 
      <ScoutsCard 
      image={card.image} alt={card.id} clickedCards={this.clickedCards}/>))}
    
    </Wrapper>
  );
};

};

export default App; 
