import axios from 'axios'
import queryString from 'query-string'
import {browserHistory as routerHistory} from 'react-router'
import {getAuthCheckConfig} from '../app/AppHelpers'
import config from '../app/config'

import {
  TEST_LIST_FETCH,
  TEST_LIST_FETCH_FULFILLED,
  TEST_LIST_FETCH_REJECTED,
  TEST_ITEM_FETCH,
  TEST_ITEM_FETCH_FULFILLED,
  TEST_ITEM_FETCH_REJECTED,
} from './Test'

export const createPost = props => {
  console.warn(props)
}

export const fetchTestList = () => {

  return dispatch => {
    dispatch({type: 'ARTIST_LIST_FETCH', payload: axios.get(config.artistUrl)})
  }
}

export const fetchTestItem = id => {
  return dispatch => {
    dispatch({type: 'ARTIST_LIST_FETCH', payload: axios.get(`${config.artistUrl}/${id}`)})
  }
}
