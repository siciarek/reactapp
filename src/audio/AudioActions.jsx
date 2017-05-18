import axios from 'axios'
import config from '../app/config'

import {
  FETCH_AUDIO,
  FETCH_AUDIO_FULLFILLED,
  FETCH_AUDIO_ITEM,
  FETCH_AUDIO_ITEM_FULLFILLED,
  FETCH_AUDIO_REJECTED
} from './Audio'

export const fetchAudioList = () => {

  return (dispatch) => {
    dispatch({type: FETCH_AUDIO})

    axios.get(config.audioUrl)
    .then((response) => {
      dispatch({
        type: FETCH_AUDIO_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_AUDIO_REJECTED, payload: err})
    })
  }
}

export const fetchAudioItem = (id) => {

  return (dispatch) => {
    dispatch({type: FETCH_AUDIO_ITEM})

    axios.get(config.audioUrl + '/' + id)
    .then((response) => {
      dispatch({
        type: FETCH_AUDIO_ITEM_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_AUDIO_REJECTED, payload: err})
    })
  }
}
