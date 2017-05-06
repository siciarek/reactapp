import axios from 'axios'
import { browserHistory as routerHistory } from 'react-router'
// import { routerHistory } from '../app/routes'

import config from '../app/config'
import {
  ADD_SONG,
  ADD_SONG_FULLFILLED,
  ADD_SONG_REJECTED,
  UPDATE_SONG,
  FETCH_SONG,
  FETCH_SONG_FULLFILLED,
  FETCH_SONG_REJECTED,
  REMOVE_SONG,
  REMOVE_SONG_FULLFILLED,
  REMOVE_SONG_REJECTED,
} from './Song'

import {
  APP_END_PROCESSING,
  APP_START_PROCESSING,
} from '../app/AppActionTypes'

export const updateSong = (data) => {

  return (dispatch) => {
    dispatch({type: UPDATE_SONG, payload: data})
  }
}

export const fetchSong = (id) => {

  return (dispatch) => {
    dispatch({type: FETCH_SONG})

    axios.get(`${config.lyricsUrl}/${id}`)
    .then((response) => {
      if (response.data.createdAt !== null) {
        response.data.createdAt = new Date(response.data.createdAt)
      }
      dispatch({
        type: FETCH_SONG_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_SONG_REJECTED, payload: err})
    })
  }
}

export const removeSong = (id) => {

  return (dispatch) => {
    dispatch({type: REMOVE_SONG})
    dispatch({type: APP_START_PROCESSING})

    axios.delete(`${config.songUrl}/${id}`)
    .then((response) => {
      dispatch({
        type: REMOVE_SONG_FULLFILLED,
        payload: response.data,
      })
    })
    .then(() => {
      dispatch({type: APP_END_PROCESSING})
      routerHistory.push('/')
      routerHistory.push('/lyrics')
    })
    .catch((err) => {
      dispatch({type: REMOVE_SONG_REJECTED, payload: err})
    })
  }
}


export const saveSong = (data) => {

  return (dispatch) => {
    dispatch({type: ADD_SONG})

    axios.post(config.songUrl, data)
    .then((response) => {
      dispatch({
        type: ADD_SONG_FULLFILLED,
        payload: response.data,
      })
      return response.data
    })
    .then((data) => {
      routerHistory.push('/')
      routerHistory.push(`/song/${data.data.id}/edit`)
    })
    .catch((err) => {
      dispatch({type: ADD_SONG_REJECTED, payload: err})
    })
  }
}
