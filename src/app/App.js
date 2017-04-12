import React, { Component } from 'react';
import './resources/css/App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
        <p className="App-intro">
          I do not want to get started. I am working at the brand new app structure.
        </p>
      </div>
    );
  }
}

export default App;
