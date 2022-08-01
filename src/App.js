import React, {Component} from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfBeer: [],
};
}

componentDidMount() {
  fetch('https://api.punkapi.com/v2/beers')
   .then(response => {
    return response.json()
   }).then(arrayOfBeer => this.setState({arrayOfBeer}))
}

 render() {
  return (
    <div>
      <h2>Your Component Works</h2>
      <ol>
        {this.state.arrayOfBeer.map((beer, index) => {
        return <li key={index}>
          <h3>{beer.name}</h3>{beer.brewers_tips}{beer.food_pairing}</li>;
      })}
      </ol>
    </div>
  );
 }
}

export default App;