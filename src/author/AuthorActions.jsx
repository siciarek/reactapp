import axios from 'axios'
import config from '../app/config'
import {browserHistory as routerHistory} from 'react-router'
import AppStash from '../app/AppStash'

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

    const cnf = AppStash.get('token') ? {headers: {'Authorization': `Bearer ${AppStash.get('token')}`}} : {}

    axios.get(config.authorUrl, cnf)
    .then((response) => {
      dispatch({type: AUTHOR_LIST_FETCH_FULLFILLED, payload: response.data})
    })
    .catch((err) => {

      dispatch({type: AUTHOR_LIST_FETCH_REJECTED, payload: err})

      if(err.hasOwnProperty('response') && err.response.status === 401) {
        routerHistory.replace('/login')
      }
    })
  }
}

export const fetchAuthorItem = (id) => {

  return (dispatch) => {
    dispatch({type: AUTHOR_ITEM_FETCH})

    axios.get(`${config.authorUrl}/${id}`)
    .then((response) => {
      dispatch({type: AUTHOR_ITEM_FETCH_FULLFILLED, payload: response.data})
      return response.data
    })
    .catch((err) => {
      dispatch({type: AUTHOR_ITEM_FETCH_REJECTED, payload: err})
    })
  }
}
