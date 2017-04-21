import axios from 'axios'
import config from '../config'

import {
  FETCH_LYRICS,
  FETCH_LYRICS_FULLFILLED,
  FETCH_LYRICS_ITEM,
  FETCH_LYRICS_ITEM_FULLFILLED,
  FETCH_LYRICS_REJECTED
} from './Lyrics'

export const fetchLyricsList = () => {

  return (dispatch) => {
    dispatch({type: FETCH_LYRICS})

    axios.get(config.lyricsUrl)
    .then((response) => {
      dispatch({
        type: FETCH_LYRICS_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_LYRICS_REJECTED, payload: err})
    })
  }
}

export const fetchLyricsItem = (id) => {

  return (dispatch) => {
    dispatch({type: FETCH_LYRICS_ITEM})

    axios.get(config.lyricsUrl + '/' + id)
    .then((response) => {
      dispatch({
        type: FETCH_LYRICS_ITEM_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_LYRICS_REJECTED, payload: err})
    })
  }
}
