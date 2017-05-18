import axios from 'axios'
import {browserHistory as routerHistory} from 'react-router'
import config from '../app/config'
import {
  SONG_ITEM_SAVE,
  SONG_ITEM_SAVE_FULLFILLED,
  SONG_ITEM_SAVE_REJECTED,
  SONG_ITEM_UPDATE,
  SONG_ITEM_REMOVE,
  SONG_ITEM_REMOVE_FULLFILLED,
  SONG_ITEM_REMOVE_REJECTED,
  SONG_ITEM_FETCH,
  SONG_ITEM_FETCH_FULLFILLED,
  SONG_ITEM_FETCH_REJECTED,
} from './Song'

//import {routerHistory} from '../app/routes'

export const updateSong = (data) => {

  return (dispatch) => {
    dispatch({type: SONG_ITEM_UPDATE, payload: data})
  }
}

export const fetchSong = (id) => {

  return (dispatch) => {
    dispatch({type: SONG_ITEM_FETCH})

    axios.get(`${config.lyricsUrl}/${id}`)
    .then((response) => {
      if (response.data.createdAt !== null) {
        response.data.createdAt = new Date(response.data.createdAt)
      }
      dispatch({
        type: SONG_ITEM_FETCH_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: SONG_ITEM_FETCH_REJECTED, payload: err})
    })
  }
}

export const removeSong = (id) => {

  return (dispatch) => {
    dispatch({type: SONG_ITEM_REMOVE})

    axios.delete(`${config.songUrl}/${id}`)
    .then((response) => {
      dispatch({
        type: SONG_ITEM_REMOVE_FULLFILLED,
        payload: response.data,
      })
    })
    .then(() => {
      routerHistory.replace('/lyrics')
    })
    .catch((err) => {
      dispatch({type: SONG_ITEM_REMOVE_REJECTED, payload: err})
    })
  }
}

export const saveSong = (data) => {

  return (dispatch) => {
    dispatch({type: SONG_ITEM_SAVE})

    axios.post(config.songUrl, data)
    .then((response) => {
      dispatch({
        type: SONG_ITEM_SAVE_FULLFILLED,
        payload: response.data,
      })
      return response.data
    })
    .then((data) => {
      routerHistory.replace(`/song/${data.data.id}/edit`)
    })
    .catch((err) => {
      dispatch({type: SONG_ITEM_SAVE_REJECTED, payload: err})
    })
  }
}
