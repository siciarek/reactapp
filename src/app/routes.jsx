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
  {
    label: 'Genres',
    icon: 'stars',
    route: '/genre/list',
  },
  null,
  {
    label: 'Lyrics',
    icon: 'library_books',
    route: '/lyrics',
  },
  {
    label: 'Audio',
    icon: 'volume_up',
    route: '/audio',
  },
  {
    label: 'Videos',
    icon: 'theaters',
    route: '/videos',
  },
  null,
  {
    label: 'Log In',
    icon: 'lock_open',
    route: '/login',
    private: false,
  },
  {
    label: 'User Zone',
    icon: 'person',
    private: true,
    children: [
      {
        label: 'Dashboard',
        icon: 'dashboard',
        route: '/dashboard',
        private: true,
      },
      {
        label: 'Profile',
        icon: 'account_circle',
        route: '/profile',
        private: true,
      },
    ]
  },
]

import React from 'react'
import {Router, Route, IndexRoute, browserHistory as routerHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import {Home, Blank, ConfigInfo, PageNotFound, AccessForbiden} from './pages'

import {GenreList, GenreItem, GenreEditor} from '../genre/Genre'
import {Login, Dashboard, Profile} from '../user/User'
import {SongEditor} from '../song/Song'
import {LyricsList, LyricsItem} from '../lyrics/Lyrics'
import {AuthorList, AuthorItem} from '../author/Author'
import {ArtistList, ArtistItem} from '../artist/Artist'
import {AudioList, AudioItem} from '../audio/Audio'
import {VideoList, VideoItem} from '../video/Video'
import {TestList, TestItem}  from '../test/Test'

import App from './App'
import store from './store'

const history = syncHistoryWithStore(routerHistory, store)

export default
<Router history={history}>
  <Route component={App}>
    <IndexRoute component={Home}/>
    <Route path="/" component={Home}/>
    <Route path="/config-info" component={ConfigInfo}/>

    <Route name="login" path="/login" component={Login}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/profile" component={Profile}/>

    <Route path="/song/add" component={SongEditor}/>
    <Route path="/song/:id/edit" component={SongEditor}/>

    <Route path="/artists" component={ArtistList}/>
    <Route path="/artists/:id" component={ArtistItem}/>

    <Route path="/authors" component={AuthorList}/>
    <Route path="/authors/:id" component={AuthorItem}/>

    <Route path="/lyrics" component={LyricsList}/>
    <Route path="/lyrics/:id" component={LyricsItem}/>

    <Route path="/audio" component={AudioList}/>
    <Route path="/audio/:id" component={AudioItem}/>

    <Route path="/videos" component={VideoList}/>
    <Route path="/video/:id" component={VideoItem}/>

    <Route path="/genre/list" component={GenreList}/>
    <Route path="/genre/:id/show" component={GenreItem}/>
    <Route path="/genre/new" component={GenreEditor}/>
    <Route path="/genre/:id/edit" component={GenreEditor}/>

    <Route path="/tests" component={TestList}/>
    <Route path="/tests/:id" component={TestItem}/>

    <Route path="/blank" component={Blank}/>
    <Route path="/access-forbiden" component={AccessForbiden}/>
    <Route path="*" component={PageNotFound}/>
  </Route>
</Router>

