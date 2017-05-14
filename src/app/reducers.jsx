import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import app from '../app/appReducer'
import lyrics from '../lyrics/lyricsReducer'
import author from '../author/authorReducer'
import artist from '../artist/artistReducer'
import music from '../music/musicReducer'
import video from '../video/videoReducer'
import song from '../song/songReducer'
import user from '../user/userReducer'
import test from '../test/testReducer'

export default combineReducers({
  test,
  routing,
  app,
  user,
  artist,
  author,
  lyrics,
  music,
  video,
  song,
})