import {combineReducers} from 'redux'

import lyrics from '../lyrics/lyricsReducer'
import author from '../author/authorReducer'
import artist from '../artist/artistReducer'

export default combineReducers({
  artist,
  author,
  lyrics,
})