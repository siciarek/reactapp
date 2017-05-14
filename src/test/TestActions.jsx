import axios from 'axios'
import config from '../app/config'

import {
  TEST_LIST_FETCH,
  TEST_LIST_FETCH_FULLFILLED,
  TEST_LIST_FETCH_REJECTED,
  TEST_ITEM_FETCH,
  TEST_ITEM_FETCH_FULLFILLED,
  TEST_ITEM_FETCH_REJECTED,
  TEST_ITEMS_SWAP,
} from './Test'

export const fetchTestList = () => {

  return (dispatch) => {
    dispatch({type: TEST_LIST_FETCH})

    axios.get(config.authorUrl)
    .then((response) => {
      dispatch({type: TEST_LIST_FETCH_FULLFILLED, payload: response.data})
    })
    .catch((err) => {
      dispatch({type: TEST_LIST_FETCH_REJECTED, payload: err})
    })
  }
}

export const swapTwoTestListItems = (oldIndex, newIndex) => {

  return (dispatch) => {
    dispatch({type: TEST_ITEMS_SWAP, payload: [oldIndex, newIndex]})
  }
}

export const fetchTestItem = (id) => {
  return (dispatch) => {
    dispatch({type: TEST_ITEM_FETCH})

    axios.get(`${config.authorUrl}/${id}`)
    .then((response) => {
      dispatch({type: TEST_ITEM_FETCH_FULLFILLED, payload: response.data})
      return response.data
    })
    .catch((err) => {
      dispatch({type: TEST_ITEM_FETCH_REJECTED, payload: err})
    })
  }
}
