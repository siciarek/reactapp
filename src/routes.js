import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import PageNotFound from './app/PageNotFound'

import App from './components/App'
import Home from './components/Home'

import {LyricsList, LyricsItem} from './lyrics/Lyrics'
import {AuthorList, AuthorItem} from './author/Author'
import {ArtistList, ArtistItem} from './artist/Artist'

export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <IndexRoute component={Home} />
      <Route path="/" component={Home}/>
      <Route path="/artists" component={ArtistList}/>
      <Route path="/artists/:id" component={ArtistItem}/>
      <Route path="/authors" component={AuthorList}/>
      <Route path="/authors/:id" component={AuthorItem}/>
      <Route path="/lyrics" component={LyricsList}/>
      <Route path="/lyrics/:id" component={LyricsItem}/>
      {/*<Route path="/music" component={MusicList}/>*/}
      {/*<Route path="/music/:id" component={MusicItem}/>*/}
      {/*<Route path="/videos" component={VideoList}/>*/}
      {/*<Route path="/video/:id" component={VideoItem}/>*/}
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
)