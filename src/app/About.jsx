import React, { Component } from 'react';
import './resources/css/App.css';
import Header from './Header';

class About extends Component {
  render() {
    return (

      <div className="App">
        <Header title="O nas" />
        <p className="App-intro">
          To jest strona informacyjna o aplikacji.
        </p>
      </div>
    );
  }
}

export default About;
