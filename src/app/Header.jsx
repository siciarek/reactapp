import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';
import logo from './resources/images/logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="App-header">

        <img src={logo} className="App-logo" alt="logo"/>
        <h2>{this.props.title}</h2>

        <ul>
          <li><Link activeStyle={{color: '#53acff'}} to='/'>Home</Link></li>
          <li><Link activeStyle={{color: '#53acff'}} to='/user'>User</Link></li>
          <li><Link activeStyle={{color: '#53acff'}} to='/45/user'>Specific User</Link></li>
          <li><Link activeStyle={{color: '#53acff'}} to='/about'>About</Link></li>
        </ul>

      </div>
    );
  }
}

export default Header;
