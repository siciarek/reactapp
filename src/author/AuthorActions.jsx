import axios from 'axios'
import config from '../app/config'

import {
  FETCH_AUTHOR,
  FETCH_AUTHOR_FULLFILLED,
  FETCH_AUTHOR_ITEM,
  FETCH_AUTHOR_ITEM_FULLFILLED,
  FETCH_AUTHOR_REJECTED
} from './Author'

export const fetchAuthorList = () => {

  return (dispatch) => {
    dispatch({type: FETCH_AUTHOR})

    axios.get(config.authorUrl)
    .then((response) => {
      dispatch({
        type: FETCH_AUTHOR_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_AUTHOR_REJECTED, payload: err})
    })
  }
}

export const fetchAuthorItem = (id) => {

  return (dispatch) => {
    dispatch({type: FETCH_AUTHOR_ITEM})

    axios.get(config.authorUrl + '/' + id)
    .then((response) => {
      dispatch({
        type: FETCH_AUTHOR_ITEM_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_AUTHOR_REJECTED, payload: err})
    })
  }
}
