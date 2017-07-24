import axios from 'axios'
import config from '../app/config'

import {
  AUTHOR_LIST_FETCH,
  AUTHOR_ITEM_FETCH,
} from './Author'

export const fetchAuthorList = () => {

  return dispatch => dispatch({type: AUTHOR_LIST_FETCH, payload: axios.get(config.authorUrl)})
}

export const fetchAuthorItem = id => {

  return dispatch => dispatch({type: AUTHOR_ITEM_FETCH, payload: axios.get(`${config.authorUrl}/${id}`)})
}
