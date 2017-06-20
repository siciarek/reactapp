import axios from 'axios'
import {browserHistory as routerHistory} from 'react-router'

import {getAuthCheckConfig, handleForbidenAccess}  from '../app/AppHelpers'
import config from '../app/config'

import {
  GENRE_LIST_FETCH,
  GENRE_LIST_FETCH_FULLFILLED,
  GENRE_LIST_FETCH_REJECTED,
  GENRE_ITEM_FETCH,
  GENRE_ITEM_FETCH_FULLFILLED,
  GENRE_ITEM_FETCH_REJECTED,
  GENRE_ITEM_ADD,
  GENRE_ITEM_ADD_FULLFILLED,
  GENRE_ITEM_ADD_REJECTED,
  GENRE_ITEM_SAVE,
  GENRE_ITEM_SAVE_FULLFILLED,
  GENRE_ITEM_SAVE_REJECTED,
  GENRE_ITEM_UPDATE,
  GENRE_ITEM_REMOVE,
  GENRE_ITEM_REMOVE_FULLFILLED,
  GENRE_ITEM_REMOVE_REJECTED,
} from './Genre'

export const fetchListGenre = (onlyEnabled = false) => {

  const url = onlyEnabled === true ? `${config.genreUrl}?enabled=1` : config.genreUrl

  return (dispatch) => {
    dispatch({type: GENRE_LIST_FETCH})

    axios.get(url)
    .then((response) => {
      dispatch({type: GENRE_LIST_FETCH_FULLFILLED, payload: response.data})
    })
    .catch((err) => {
      dispatch({type: GENRE_LIST_FETCH_REJECTED, payload: err})
    })
  }
}

export const fetchItemGenre = (id) => {

  return (dispatch) => {
    dispatch({type: GENRE_ITEM_FETCH})

    if (id === null) {
      dispatch({type: GENRE_ITEM_FETCH_FULLFILLED, payload: null})
    }
    else {
      axios.get(`${config.genreUrl}/${id}`)
      .then((response) => {
        dispatch({type: GENRE_ITEM_FETCH_FULLFILLED, payload: response.data})
        return response.data
      })
      .catch((err) => {
        dispatch({type: GENRE_ITEM_FETCH_REJECTED, payload: err})
      })
    }
  }
}


export const updateGenre = (data) => {

  return (dispatch) => {
    dispatch({type: GENRE_ITEM_UPDATE, payload: data})
  }
}

export const saveGenre = (data) => {

  return (dispatch) => {

    if (data.id !== null) {

      dispatch({type: GENRE_ITEM_SAVE})

      axios
      .put(`${config.genreUrl}/${data.id}`, data, getAuthCheckConfig())
      .then((response) => {
        dispatch({
          type: GENRE_ITEM_SAVE_FULLFILLED,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({type: GENRE_ITEM_SAVE_REJECTED, payload: error})
        handleForbidenAccess(dispatch, error, `/genre/${data.id}/edit`)
      })
    }
    else {

      dispatch({type: GENRE_ITEM_ADD})

      axios
      .post(config.genreUrl, data, getAuthCheckConfig())
      .then((response) => {
        dispatch({
          type: GENRE_ITEM_ADD_FULLFILLED,
          payload: response.data,
        })
        return response.data
      })
      .then((data) => {
        routerHistory.replace(`/genre/${data.id}/edit`)
      })
      .catch((error) => {
        dispatch({type: GENRE_ITEM_ADD_REJECTED, payload: error})
        handleForbidenAccess(dispatch, error, '/genre/list')
      })
    }
  }
}

export const removeGenre = (id) => {

  return (dispatch) => {
    dispatch({type: GENRE_ITEM_REMOVE})

    const url = `${config.genreUrl}/${id}`

    axios.delete(url, getAuthCheckConfig())
    .then((response) => {
      dispatch({
        type: GENRE_ITEM_REMOVE_FULLFILLED,
        payload: response.data,
      })
    })
    .then(() => {
      routerHistory.replace('/genre/list')
    })
    .catch((error) => {
      dispatch({type: GENRE_ITEM_REMOVE_REJECTED, payload: error})
      handleForbidenAccess(dispatch, error, `/genre/${id}/edit`)
    })
  }
}