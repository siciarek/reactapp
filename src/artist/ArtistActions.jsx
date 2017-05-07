import axios from 'axios'
import config from '../app/config'

import {
  ARTIST_LIST_FETCH,
  ARTIST_LIST_FETCH_FULLFILLED,
  ARTIST_LIST_FETCH_REJECTED,
  ARTIST_ITEM_FETCH,
  ARTIST_ITEM_FETCH_FULLFILLED,
  ARTIST_ITEM_FETCH_REJECTED
} from './Artist'

export const fetchArtistList = () => {

  return (dispatch) => {
    dispatch({type: ARTIST_LIST_FETCH})

    axios.get(config.artistUrl)
    .then((response) => {
      dispatch({type: ARTIST_LIST_FETCH_FULLFILLED, payload: response.data})
    })
    .catch((err) => {
      dispatch({type: ARTIST_LIST_FETCH_REJECTED, payload: err})
    })
  }
}

export const fetchArtistItem = (id) => {

  return (dispatch) => {
    dispatch({type: ARTIST_ITEM_FETCH})

    axios.get(`${config.artistUrl}/${id}`)
    .then((response) => {
      dispatch({type: ARTIST_ITEM_FETCH_FULLFILLED, payload: response.data})
    })
    .catch((err) => {
      dispatch({type: ARTIST_ITEM_FETCH_REJECTED, payload: err})
    })
  }
}
