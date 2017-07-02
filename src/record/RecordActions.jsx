import axios from 'axios'
import config from '../app/config'

import {
  FETCH_RECORD_LIST,
  FETCH_RECORD_LIST_FULLFILLED,
  FETCH_RECORD_LIST_REJECTED,
  FETCH_RECORD_ITEM,
  FETCH_RECORD_ITEM_FULLFILLED,
  FETCH_RECORD_ITEM_REJECTED,
} from './Record'

export const fetchRecordList = () => {

  const url = config.recordUrl

  return (dispatch) => {
    dispatch({type: FETCH_RECORD_LIST})

    axios.get(url)
    .then((response) => {
      dispatch({
        type: FETCH_RECORD_LIST_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_RECORD_LIST_REJECTED, payload: err})
    })
  }
}

export const fetchRecordItem = id => {

  const url = config.recordUrl

  return (dispatch) => {
    dispatch({type: FETCH_RECORD_ITEM})

    axios.get(url)
    .then((response) => {
      const temp = response.data.filter(e => e.id === parseInt(id, 10))
      const payload = temp.length > 0 ? temp.shift() : {}

      dispatch({
        type: FETCH_RECORD_ITEM_FULLFILLED,
        payload: payload,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_RECORD_ITEM_REJECTED, payload: err})
    })
  }
}
