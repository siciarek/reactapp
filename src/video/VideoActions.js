import axios from 'axios'
import config from '../app/config'

import {
  FETCH_VIDEO,
  FETCH_VIDEO_FULLFILLED,
  FETCH_VIDEO_ITEM,
  FETCH_VIDEO_ITEM_FULLFILLED,
  FETCH_VIDEO_REJECTED
} from './Video'

export const fetchVideoList = () => {

  return (dispatch) => {
    dispatch({type: FETCH_VIDEO})

    axios.get(config.videoUrl)
    .then((response) => {
      dispatch({
        type: FETCH_VIDEO_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_VIDEO_REJECTED, payload: err})
    })
  }
}

export const fetchVideoItem = (id) => {

  return (dispatch) => {
    dispatch({type: FETCH_VIDEO_ITEM})

    axios.get(config.videoUrl + '/' + id)
    .then((response) => {
      dispatch({
        type: FETCH_VIDEO_ITEM_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_VIDEO_REJECTED, payload: err})
    })
  }
}
