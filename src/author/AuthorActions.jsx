import axios from 'axios'
import config from '../app/config'
import {browserHistory as routerHistory} from 'react-router'
import {getAuthCheckConfig} from '../app/AppHelpers'

import {
  AUTHOR_LIST_FETCH,
  AUTHOR_LIST_FETCH_FULLFILLED,
  AUTHOR_LIST_FETCH_REJECTED,
  AUTHOR_ITEM_FETCH,
  AUTHOR_ITEM_FETCH_FULLFILLED,
  AUTHOR_ITEM_FETCH_REJECTED
} from './Author'

import {
  APP_SET_TARGET_ROUTE,
} from '../app/AppActionTypes'

export const fetchAuthorList = () => {

  return (dispatch) => {
    dispatch({type: AUTHOR_LIST_FETCH})

    axios
    .get(config.authorUrl, getAuthCheckConfig())
    .then((response) => {
      dispatch({type: AUTHOR_LIST_FETCH_FULLFILLED, payload: response.data})
    })
    .catch((error) => {
      dispatch({type: AUTHOR_LIST_FETCH_REJECTED, payload: error})

      if (error.hasOwnProperty('response') && error.response.status === 401) {
        dispatch({type: APP_SET_TARGET_ROUTE, payload: '/authors'})
        routerHistory.replace('/login')
      }
    })
  }
}

export const fetchAuthorItem = (id) => {

  return (dispatch) => {
    dispatch({type: AUTHOR_ITEM_FETCH})

    axios
    .get(`${config.authorUrl}/${id}`, getAuthCheckConfig())
    .then((response) => {
      dispatch({type: AUTHOR_ITEM_FETCH_FULLFILLED, payload: response.data})
      return response.data
    })
    .catch((error) => {
      dispatch({type: AUTHOR_ITEM_FETCH_REJECTED, payload: error})

      if (error.hasOwnProperty('response') && error.response.status === 401) {
        dispatch({type: APP_SET_TARGET_ROUTE, payload: `/authors/${id}`})
        routerHistory.replace('/login')
      }
    })
  }
}
