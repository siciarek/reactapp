import axios from 'axios'
import config from '../config'

import {
  FETCH_ARTIST,
  FETCH_ARTIST_FULLFILLED,
  FETCH_ARTIST_ITEM,
  FETCH_ARTIST_ITEM_FULLFILLED,
  FETCH_ARTIST_REJECTED
} from './Artist'

export const fetchArtistList = () => {

  return (dispatch) => {
    dispatch({type: FETCH_ARTIST})

    axios.get(config.artistUrl)
    .then((response) => {
      dispatch({
        type: FETCH_ARTIST_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_ARTIST_REJECTED, payload: err})
    })
  }
}

export const fetchArtistItem = (id) => {

  return (dispatch) => {
    dispatch({type: FETCH_ARTIST_ITEM})

    axios.get(config.artistUrl + '/' + id)
    .then((response) => {
      dispatch({
        type: FETCH_ARTIST_ITEM_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_ARTIST_REJECTED, payload: err})
    })
  }
}
