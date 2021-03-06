import axios from 'axios'
import {browserHistory as routerHistory} from 'react-router'
import {getAuthCheckConfig}  from '../app/AppHelpers'
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

    axios.delete(`${config.songUrl}/${id}`, getAuthCheckConfig())
    .then((response) => {
      dispatch({
        type: SONG_ITEM_REMOVE_FULLFILLED,
        payload: response.data,
      })
    })
    .then(() => {
      routerHistory.push('/blank')
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

    if (data.id !== null) {

      axios.put(`${config.songUrl}/${data.id}`, data, getAuthCheckConfig())
      .then((response) => {
        dispatch({
          type: SONG_ITEM_SAVE_FULLFILLED,
          payload: response.data,
        })
        return response.data
      })
      .catch((err) => {
        dispatch({type: SONG_ITEM_SAVE_REJECTED, payload: err})
      })
    }
    else {
      axios.post(config.songUrl, data, getAuthCheckConfig())
      .then((response) => {
        dispatch({
          type: SONG_ITEM_SAVE_FULLFILLED,
          payload: response.data,
        })
        return response.data
      })
      .then((data) => {
        routerHistory.replace(`/song/${data.id}/edit`)
      })
      .catch((err) => {
        dispatch({type: SONG_ITEM_SAVE_REJECTED, payload: err})
      })
    }
  }
}
