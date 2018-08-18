import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './NameForm/NameForm';
import Winner from './Winner';

class App extends Component {

  render() {
    return (
      <div className="App brick">
        <div className="container-contact100">
          <div className="contact100-map" id="google_map" data-map-x="40.722047" data-map-y="-73.986422" data-pin="images/icons/map-marker.png" data-scrollwhell="0" data-draggable="1"></div>
            <Person/>
        </div>
      </div>
    );
  }
}

export default App;
