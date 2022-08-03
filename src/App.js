import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfBeer: [],
    };
  }











  
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json();
      })
      .then((arrayOfBeer) => this.setState({ arrayOfBeer }));
  }

  handleClick = () => {
    alert("You Like This Beer");
  };

  render() {
    return (
      <div>
        <h2>BEERS</h2>
        <ol>
          {this.state.arrayOfBeer.map((beer, index) => {
            return (
              <li key={index}>
                <h3>{beer.name}</h3>
                <strong>Tips: </strong>
                {beer.brewers_tips}
                <p>
                  <strong>Food Pairing: </strong>
                  {beer.food_pairing}
                </p>
                <p>
                  <strong>ABV: </strong>
                  {beer.abv}
                </p>
                <button onClick={this.handleClick}>
                  Click to Like This Beer
                </button>
                <hr></hr>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
