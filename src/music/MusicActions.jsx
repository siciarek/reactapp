import axios from 'axios'
import config from '../app/config'

import {
  FETCH_MUSIC,
  FETCH_MUSIC_FULLFILLED,
  FETCH_MUSIC_ITEM,
  FETCH_MUSIC_ITEM_FULLFILLED,
  FETCH_MUSIC_REJECTED
} from './Music'

export const fetchMusicList = () => {

  return (dispatch) => {
    dispatch({type: FETCH_MUSIC})

    axios.get(config.musicUrl)
    .then((response) => {
      dispatch({
        type: FETCH_MUSIC_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_MUSIC_REJECTED, payload: err})
    })
  }
}

export const fetchMusicItem = (id) => {

  return (dispatch) => {
    dispatch({type: FETCH_MUSIC_ITEM})

    axios.get(config.musicUrl + '/' + id)
    .then((response) => {
      dispatch({
        type: FETCH_MUSIC_ITEM_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_MUSIC_REJECTED, payload: err})
    })
  }
}
