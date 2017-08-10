import axios from 'axios'
import {browserHistory as routerHistory} from 'react-router'
import {getAuthCheckConfig, handleForbidenAccess} from '../app/AppHelpers'
import config from '../app/config'
import {
  SONG_ITEM_SAVE,
  SONG_ITEM_SAVE_FULFILLED,
  SONG_ITEM_SAVE_REJECTED,
  SONG_ITEM_UPDATE,
  SONG_ITEM_REMOVE,
  SONG_ITEM_REMOVE_FULFILLED,
  SONG_ITEM_REMOVE_REJECTED,
  SONG_ITEM_FETCH,
  SONG_ITEM_FETCH_FULFILLED,
  SONG_ITEM_FETCH_REJECTED,
} from './Song'

export const fetchSong = id => dispatch => dispatch({
  type: SONG_ITEM_FETCH,
  payload: axios.get(`${config.lyricsUrl}/${id}`)
})

export const removeSong = id => {

  return dispatch => {
    dispatch({
      type: SONG_ITEM_REMOVE, payload: axios.delete(`${config.songUrl}/${id}`, getAuthCheckConfig())
      .then((response) => {
        routerHistory.push('/lyrics')
      })
    })
  }
}

export const saveSong = data => {

  const url = data.id
    ? `${config.songUrl}/${data.id}`
    : config.songUrl

  return dispatch => {

    dispatch({
      type: SONG_ITEM_SAVE,
      payload: axios.put(url, data, getAuthCheckConfig())
      .catch(error => {
        setTimeout(() => handleForbidenAccess(dispatch, {type: SONG_ITEM_SAVE_REJECTED, payload: error}, url), 500)
      })
    })
  }
}
