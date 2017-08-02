import axios from 'axios'
import queryString from 'query-string'
import {browserHistory as routerHistory} from 'react-router'
import {getAuthCheckConfig} from './AppHelpers'
import config from './config'
import {
  AUTHOR_ITEMS_SWAP_PENDING,
  AUTHOR_ITEMS_SWAP_FULFILLED,
  AUTHOR_ITEMS_SWAP_REJECTED,
} from '../author/Author'

import {
  ARTIST_ITEMS_SWAP_PENDING,
  ARTIST_ITEMS_SWAP_FULFILLED,
  ARTIST_ITEMS_SWAP_REJECTED,
} from '../artist/Artist'

import {
  APP_SET_TARGET_ROUTE,
} from './AppActionTypes'

import {PENDING, FULFILLED, REJECTED} from 'redux-promise-middleware'

export const swapListItems = (modelName, src, trg, onError) => {

  const models = {
    author: {
      url: config.authorUrl,
      pending: AUTHOR_ITEMS_SWAP_PENDING,
      fulfilled: AUTHOR_ITEMS_SWAP_FULFILLED,
      rejected: AUTHOR_ITEMS_SWAP_REJECTED,
    },
    artist: {
      url: config.artistUrl,
      pending: ARTIST_ITEMS_SWAP_PENDING,
      fulfilled: ARTIST_ITEMS_SWAP_FULFILLED,
      rejected: ARTIST_ITEMS_SWAP_REJECTED,
    }
  }

  if(false === models.hasOwnProperty(modelName)) {
    throw `Model "${modelName}" is not supported.`
  }

  const model = models[modelName]
  const url = `${model.url}/${src.id}?${queryString.stringify({swap: trg.id})}`

  return dispatch => {

    dispatch({type: model.pending, payload: [src, trg]})

    axios.put(url, {}, getAuthCheckConfig())
    .then((response) => {
      dispatch({type: model.fulfilled})
    })
    .catch((error) => {
      dispatch({type: model.rejected, payload: error})
      onError()

      if (error.hasOwnProperty('response') && error.response.status === 401) {
        dispatch({type: APP_SET_TARGET_ROUTE, payload: `${model.url}`})
        routerHistory.replace('/login')
      }
    })

  }
}