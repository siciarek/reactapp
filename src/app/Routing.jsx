import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';
import App from './App';
import About from './About';
import User from '../user/User';

class Routing extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/user" component={User}/>
        <Route path="/:id/user" component={User}/>
        <Route path="*" component={NotFound}/>
      </Router>
    );
  }
}

const NotFound = () => (<h1>404. This page is not found!</h1>);

export default Routing;
