import React, { Component } from 'react';

class Winner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: "",
    };
  }

  componentDidMount(){
  this.timer = setInterval(()=> this.getMovies(), 1000)
  }

  async getMovies(){

   fetch('https://facebook.github.io/react-native/movies.json', {method: "GET"})
    .then((response) => response.json())
    .then((responseData) =>
    {
      //set your data here
       console.log(responseData["title"]);
       this.setState({winner: responseData["title"]});
    })
    .catch((error) => {
        console.error(error);
    });

  }

  render() {
    return (
      <h1>{this.state.winner}</h1>
    );
  }
}

export default Winner;


