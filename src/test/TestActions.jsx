import axios from 'axios'
import queryString from 'query-string'
import {browserHistory as routerHistory} from 'react-router'
import {getAuthCheckConfig} from '../app/AppHelpers'
import config from '../app/config'

import {
  TEST_LIST_FETCH,
  TEST_LIST_FETCH_FULLFILLED,
  TEST_LIST_FETCH_REJECTED,
  TEST_ITEM_FETCH,
  TEST_ITEM_FETCH_FULLFILLED,
  TEST_ITEM_FETCH_REJECTED,
  TEST_ITEMS_SWAP,
  TEST_ITEMS_SWAP_REJECTED,
} from './Test'

import {
  APP_SET_TARGET_ROUTE
} from '../app/AppActionTypes'

export const fetchTestList = () => {

  return (dispatch) => {
    dispatch({type: TEST_LIST_FETCH})

    axios.get(config.artistUrl)
    .then((response) => {
      dispatch({type: TEST_LIST_FETCH_FULLFILLED, payload: response.data})
    })
    .catch((err) => {
      dispatch({type: TEST_LIST_FETCH_REJECTED, payload: err})
    })
  }
}

export const swapTwoTestListItems = (src, trg) => {

  return (dispatch) => {
    dispatch({type: TEST_ITEM_FETCH})

    const url = `${config.artistUrl}/${src.id}?${queryString.stringify({swap: trg.id})}`

    dispatch({type: TEST_ITEMS_SWAP, payload: [src, trg]})

    axios.put(url, {}, getAuthCheckConfig())
    .then((response) => {
      fetchTestList()
    })
    .catch((error) => {
      dispatch({type: TEST_ITEMS_SWAP_REJECTED, payload: error})

      if (error.hasOwnProperty('response') && error.response.status === 401) {
        dispatch({type: APP_SET_TARGET_ROUTE, payload: `${config.artistUrl}`})
        routerHistory.replace('/login')
      }
    })

  }
}

export const fetchTestItem = (id) => {
  return (dispatch) => {
    dispatch({type: TEST_ITEM_FETCH})

    axios.get(`${config.artistUrl}/${id}`)
    .then((response) => {
      dispatch({type: TEST_ITEM_FETCH_FULLFILLED, payload: response.data})
      return response.data
    })
    .catch((err) => {
      dispatch({type: TEST_ITEM_FETCH_REJECTED, payload: err})
    })
  }
}
