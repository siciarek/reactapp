import {combineReducers} from 'redux'

import app from '../app/appReducer'
import lyrics from '../lyrics/lyricsReducer'
import author from '../author/authorReducer'
import artist from '../artist/artistReducer'
import music from '../music/musicReducer'
import video from '../video/videoReducer'
import song from '../song/songReducer'
import user from '../user/userReducer'

export default combineReducers({
  app,
  user,
  artist,
  author,
  lyrics,
  music,
  video,
  song,
})