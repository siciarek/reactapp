import axios from 'axios'
import config from '../app/config'

import {
  FETCH_RECORD_LIST,
  FETCH_RECORD_LIST_FULFILLED,
  FETCH_RECORD_LIST_REJECTED,
  FETCH_RECORD_ITEM,
  FETCH_RECORD_ITEM_FULFILLED,
  FETCH_RECORD_ITEM_REJECTED,
} from './Record'

export const fetchRecordList = () => ({type: FETCH_RECORD_LIST, payload: axios.get(config.recordUrl)})

export const fetchRecordItem = id => {

  const url = config.recordUrl

  return dispatch => {
    dispatch({type: FETCH_RECORD_ITEM})

    axios.get(url)
    .then((response) => {
      const data = response.data.find(e => e.id.toString() == id) || {}

      dispatch({
        type: FETCH_RECORD_ITEM_FULFILLED,
        payload: {data: data},
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_RECORD_ITEM_REJECTED, payload: err})
    })
  }
}
