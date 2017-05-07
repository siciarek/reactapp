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

import React from 'react'
import {Router, Route, IndexRoute, browserHistory as routerHistory} from 'react-router'

import PageNotFound from './pages/PageNotFound'
import AccessForbiden from './pages/AccessForbiden'

import Home from './pages/Home'
import Blank from './pages/Blank'
import Test from './pages/Test'
import ConfigInfo from './pages/ConfigInfo'

import {Login, Dashboard, Profile} from '../user/User'
import {SongEditor} from '../song/Song'
import {LyricsList, LyricsItem} from '../lyrics/Lyrics'
import {AuthorList, AuthorItem} from '../author/Author'
import {ArtistList, ArtistItem} from '../artist/Artist'
import {MusicList, MusicItem} from '../music/Music'
import {VideoList, VideoItem} from '../video/Video'

import App from './App'

export default
<Router history={routerHistory}>
  <Route component={App}>
    <IndexRoute component={Home}/>
    <Route path="/" component={Home}/>
    <Route path="/config-info" component={ConfigInfo}/>

    <Route path="/login" component={Login}/>
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

    <Route path="/music" component={MusicList}/>
    <Route path="/music/:id" component={MusicItem}/>

    <Route path="/videos" component={VideoList}/>
    <Route path="/video/:id" component={VideoItem}/>

    <Route path="/blank" component={Blank}/>
    <Route path="/test" component={Test}/>
    <Route path="/access-forbiden" component={AccessForbiden}/>
    <Route path="*" component={PageNotFound}/>
  </Route>
</Router>

