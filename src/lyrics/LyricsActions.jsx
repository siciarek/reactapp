import axios from 'axios'
import config from '../app/config'

import {
  LYRICS_LIST_FETCH,
  LYRICS_LIST_FETCH_FULFILLED,
  LYRICS_LIST_FETCH_REJECTED,
  LYRICS_ITEM_FETCH,
  LYRICS_ITEM_FETCH_FULFILLED,
  LYRICS_ITEM_FETCH_REJECTED,
} from './Lyrics'

export const fetchLyricsList = () => {

  return dispatch => dispatch({type: LYRICS_LIST_FETCH, payload: axios.get(config.lyricsUrl)})
}

export const fetchLyricsItem = id => {

  return dispatch => dispatch({type: LYRICS_ITEM_FETCH, payload: axios.get(`${config.lyricsUrl}/${id}`)})
}
