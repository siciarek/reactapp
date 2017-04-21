import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import PageNotFound from './app/PageNotFound'

import App from './components/App'
import Home from './components/Home'
import Tweets from './components/Tweets'
import Users from './components/Users'
import Author from './author/Author'
import Artist from './artist/Artist'
import Music from './music/Music'
import Video from './video/Video'

import {LyricsList, LyricsItem} from './lyrics/Lyrics'

export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <IndexRoute component={Home} />
      <Route path="/" component={Home}/>
      <Route path="/users" component={Users}/>
      <Route path="/tweets" component={Tweets}/>
      <Route path="/authors" component={Author}/>
      <Route path="/artists" component={Artist}/>
      <Route path="/lyrics" component={LyricsList}/>
      <Route path="/lyrics/:id" component={LyricsItem}/>
      <Route path="/music" component={Music}/>
      <Route path="/videos" component={Video}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
)