import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import PageNotFound from './pages/PageNotFound'
import AccessForbiden from './pages/AccessForbiden'

import App from './App'
import Home from './pages/Home'

import {SongEditor} from '../song/Song'
import {LyricsList, LyricsItem} from '../lyrics/Lyrics'
import {AuthorList, AuthorItem} from '../author/Author'
import {ArtistList, ArtistItem} from '../artist/Artist'
import {MusicList, MusicItem} from '../music/Music'
import {VideoList, VideoItem} from '../video/Video'

export const routes = [
  {
    label: 'Home',
    icon: 'home',
    route: '/',
  },
  {
    label: 'Authors',
    icon: 'face',
    route: '/authors',
  },
  {
    label: 'Artists',
    icon: 'mic',
    route: '/artists',
  },
  null,
  {
    label: 'Lyrics',
    icon: 'library_books',
    route: '/lyrics',
  },
  {
    label: 'Music',
    icon: 'volume_up',
    route: '/music',
  },
  {
    label: 'Videos',
    icon: 'video_label',
    route: '/videos',
  },
]

export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <IndexRoute component={Home}/>
      <Route path="/" component={Home}/>

      <Route path="/song/add" component={SongEditor}/>
      <Route path="/song/:id/edit" component={SongEditor}/>

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

      <Route path="/private" component={AccessForbiden}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
)