import {combineReducers} from 'redux'

import tweets from './tweetsReducer'
import user from './userReducer'
import lyrics from '../lyrics/lyricsReducer'

export default combineReducers({
  lyrics,
  tweets,
  user,
})