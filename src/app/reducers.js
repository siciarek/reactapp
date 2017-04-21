import {combineReducers} from 'redux'

import lyrics from '../lyrics/lyricsReducer'
import author from '../author/authorReducer'
import artist from '../artist/artistReducer'
import music from '../music/musicReducer'
import video from '../video/videoReducer'

export default combineReducers({
  artist,
  author,
  lyrics,
  music,
  video,
})