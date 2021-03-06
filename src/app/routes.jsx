import React from 'react'
import {Router, Route, IndexRoute, browserHistory as routerHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import App from './App'
import {Home, Blank, ConfigInfo, PageNotFound, AccessForbiden} from './pages'
import {GenreList, GenreItem, GenreEditor, GenreCreator} from '../genre/Genre'
import {Login, Logout, Dashboard, Profile} from '../user/User'
import {SongEditor} from '../song/Song'
import {LyricsList, LyricsItem} from '../lyrics/Lyrics'
import {AuthorList, AuthorItem} from '../author/Author'
import {ArtistList, ArtistItem} from '../artist/Artist'
import {AudioList, AudioItems, AudioItem} from '../audio/Audio'
import {VideoList, VideoItem} from '../video/Video'
import {TestList, TestItem}  from '../test/Test'

import store from './store'

const history = syncHistoryWithStore(routerHistory, store)

export default
<Router history={history}>
  <Route component={App}>d
    <IndexRoute component={Home}/>
    <Route path="/" component={Home}/>
    <Route path="/config-info" component={ConfigInfo}/>

    <Route path="/login" component={Login}/>
    <Route path="/logout" component={Logout}/>
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
    <Route path="/audio/:id" component={AudioItems}/>
    <Route path="/audio/item/:id" component={AudioItem}/>

    <Route path="/videos" component={VideoList}/>
    <Route path="/video/:id" component={VideoItem}/>

    <Route path="/genre/list" component={GenreList}/>
    <Route path="/genre/:id/show" component={GenreItem}/>
    <Route path="/genre/new" component={GenreCreator}/>
    <Route path="/genre/:id/edit" component={GenreEditor}/>

    <Route path="/tests" component={TestList}/>
    <Route path="/tests/:id" component={TestItem}/>

    <Route path="/blank" component={Blank}/>
    <Route path="/access-forbiden" component={AccessForbiden}/>
    <Route path="*" component={PageNotFound}/>
  </Route>
</Router>
