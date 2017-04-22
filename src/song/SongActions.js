import axios from 'axios'
import config from '../app/config'

import {
  ADD_SONG,
  ADD_SONG_FULLFILLED,
  ADD_SONG_REJECTED,
} from './Song'

export const addSong = (data) => {

  return (dispatch) => {
    dispatch({type: ADD_SONG})

    axios.post(config.songUrl, data)
    .then((response) => {
      dispatch({
        type: ADD_SONG_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: ADD_SONG_REJECTED, payload: err})
    })
  }
}
