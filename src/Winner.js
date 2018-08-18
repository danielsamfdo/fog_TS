import React, { Component } from 'react';

// const express = require('express')
// const app = express()
// const cors = require('cors')
// app.use(cors())
class Winner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: "",
    };
  }

  componentDidMount(){
  this.timer = setInterval(()=> this.getMovies(), 1000*1*3)
  }

  async getMovies(){


    

    // app.get('http://localhost:20000/t.json', function (req, res, next) {
    //   res.json({msg: 'This is CORS-enabled for all origins!'})
    //   console.log(req);
    //   console.log(res);
    // })


    fetch('http://localhost:20000/test.json', {method: "GET", mode: 'no-cors'})
    .then((response) => {
       console.log("Response");
      console.log(response);
      return response.text();
    })
    .then((data) => {
       console.log("Data");
      console.log(data);
      return (data ? JSON.parse(data) : {});
    })
    .then((responseData) =>
    {
    // //   //set your data here
       console.log("responseData");
       console.log(responseData);
    // //    this.setState({winner: responseData["firstName"] + responseData["lastName"] + responseData["email"] + responseData["phone"]});
    })
    .catch((error) => {
        console.error(error);
    });

   // fetch('https://facebook.github.io/react-native/movies.json', {method: "GET"})
   //  .then((response) => {console.log(response);console.log(response.json());return response.json();})
   //  .then((responseData) =>
   //  {
   //    //set your data here
   //     console.log(responseData["title"]);
   //     this.setState({winner: responseData["title"]});
   //  })
   //  .catch((error) => {
   //      console.error(error);
   //  });

  }

  render() {
    return (
      <div className="App blue">
        <div className="container-contact100">
          <h1 className="big">{this.state.winner}</h1>
        </div>
      </div>
    );
  }
}

export default Winner;


