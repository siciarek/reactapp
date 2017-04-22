import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import PageNotFound from './pages/PageNotFound'

import App from './App'
import Home from './pages/Home'

import {LyricsList, LyricsItem} from '../lyrics/Lyrics'
import {AuthorList, AuthorItem} from '../author/Author'
import {ArtistList, ArtistItem} from '../artist/Artist'
import {MusicList, MusicItem} from '../music/Music'
import {VideoList, VideoItem} from '../video/Video'

export default (
  <Router history={hashHistory}>
    <Route component={App}>
      <IndexRoute component={Home} />
      <Route path="/" component={Home}/>
      <Route path="/artists" component={ArtistList}/>
      <Route path="/artists/:id" component={ArtistItem}/>
      <Route path="/authors" component={AuthorList}/>
      <Route path="/authors/:id" component={AuthorItem}/>
      <Route path="/lyrics" component={LyricsList}/>
      <Route path="/lyrics/:id" component={LyricsItem}/>
      <Route path="/music" component={MusicList}/>
      <Route path="/music/:id" component={MusicItem}/>
      <Route path="/videos" component={VideoList}/>
      <Route path="/video/:id" component={VideoItem}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
)