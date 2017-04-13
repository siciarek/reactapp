import React, { Component } from 'react';
import './resources/css/App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Header title="Strona główna" />
        <p className="App-intro">
          To jest strona główna aplikacji.
        </p>
      </div>
    );
  }
}

export default App;
