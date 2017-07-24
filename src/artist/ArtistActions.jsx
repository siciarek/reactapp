import axios from 'axios'
import config from '../app/config'

import {
  ARTIST_LIST_FETCH,
  ARTIST_ITEM_FETCH,
} from './Artist'

export const fetchArtistList = () => {

  return dispatch => dispatch({type: ARTIST_LIST_FETCH, payload: axios.get(config.artistUrl)})
}

export const fetchArtistItem = id => {

  return dispatch => dispatch({type: ARTIST_ITEM_FETCH, payload: axios.get(`${config.artistUrl}/${id}`)})
}
