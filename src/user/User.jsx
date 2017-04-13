import React, { Component } from 'react';
import '../app/resources/css/App.css';
import Header from '../app/Header';

class User extends Component {
  render() {
    return (

      <div className="App">
        <Header title="Strona użytkownika" />
        <p className="App-intro">
          To jest strona użytkownika. {this.props.params.id && this.props.params.id}
        </p>
      </div>
    );
  }
}

export default User;
