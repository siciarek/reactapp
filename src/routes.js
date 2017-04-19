import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App'
import Home from './components/Home'
import Tweets from './components/Tweets'
import Users from './components/Users'

const NotFound = () => (<h1>404. Page not found.</h1>)

export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <IndexRoute component={Home} />
      <Route path="/" component={Home}/>
      <Route path="/users" component={Users}/>
      <Route path="/tweets" component={Tweets}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
)