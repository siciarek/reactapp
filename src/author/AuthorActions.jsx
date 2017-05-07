import axios from 'axios'
import config from '../app/config'

import {
  AUTHOR_LIST_FETCH,
  AUTHOR_LIST_FETCH_FULLFILLED,
  AUTHOR_LIST_FETCH_REJECTED,
  AUTHOR_ITEM_FETCH,
  AUTHOR_ITEM_FETCH_FULLFILLED,
  AUTHOR_ITEM_FETCH_REJECTED
} from './Author'

export const fetchAuthorList = () => {

  return (dispatch) => {
    dispatch({type: AUTHOR_LIST_FETCH})

    axios.get(config.authorUrl)
    .then((response) => {
      dispatch({type: AUTHOR_LIST_FETCH_FULLFILLED, payload: response.data})
    })
    .catch((err) => {
      dispatch({type: AUTHOR_LIST_FETCH_REJECTED, payload: err})
    })
  }
}

export const fetchAuthorItem = (id) => {

  return (dispatch) => {
    dispatch({type: AUTHOR_ITEM_FETCH})

    axios.get(`${config.authorUrl}/${id}`)
    .then((response) => {
      dispatch({type: AUTHOR_ITEM_FETCH_FULLFILLED, payload: response.data})
    })
    .catch((err) => {
      dispatch({type: AUTHOR_ITEM_FETCH_REJECTED, payload: err})
    })
  }
}
