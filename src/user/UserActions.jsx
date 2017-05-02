import axios from 'axios'
import {Cookies} from 'react-cookie'

import config from '../app/config'
import {
  UPDATE_USER,
  SAVE_USER,
  SAVE_USER_FULLFILLED,
  SAVE_USER_REJECTED,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_USER_FULLFILLED,
  UNAUTH_USER_FULLFILLED,
  AUTH_ERROR,
  AUTH_CHECK,
  AUTH_CHECK_SUCCESS,
  AUTH_CHECK_FAILURE,
} from './User'

const cookie = new Cookies()

export function updateUser(data) {
  return function (dispatch) {
    dispatch({type: UPDATE_USER, payload: data})
  }
}

export function saveUser(data) {

  return function (dispatch) {
    dispatch({type: SAVE_USER})
    let url = config.userUrl + '/' + data.id

    axios.put(url, {
      data,
      headers: {
        'Authorization': cookie.get('token')
      }
    })
    .then((response) => {
      dispatch({
        type: SAVE_USER_FULLFILLED,
        payload: response.data.msg,
      })
    })
    .catch((err) => {
      dispatch({type: SAVE_USER_REJECTED, payload: err})
    })
  }
}

export function authenticateUser({username, password}) {
  return function (dispatch) {
    dispatch({type: AUTH_USER})

    axios.post(`${config.userUrl}/login`, {username, password})
    .then(response => {
      if (response.data.authenticated === true) {
        cookie.set('token', response.data.token, {path: '/'})
        dispatch({type: AUTH_USER_FULLFILLED, payload: response.data})
        window.location.href = '/dashboard'
      }
      else {
        dispatch({type: AUTH_CHECK_FAILURE, payload: response.data})
      }
    })
    .catch((err) => {
      dispatch({type: AUTH_ERROR, payload: err})
    })
  }
}

export function unauthenticateUser() {
  return function (dispatch) {
    dispatch({type: UNAUTH_USER})

    axios.post(`${config.userUrl}/logout`)
    .then(response => {
      if (response.data.authenticated === false) {
        cookie.remove('token', {path: '/'})
        dispatch({type: UNAUTH_USER_FULLFILLED, payload: response.data})
        window.location.href = '/login'
      }
    })
    .catch((err) => {
      dispatch({type: AUTH_ERROR, payload: err})
    })
  }
}

export function authCheck() {

  return function (dispatch) {
    dispatch({type: AUTH_CHECK})

    axios.get(`${config.userUrl}/auth`, {
      headers: {
        'Authorization': cookie.get('token')
      }
    })
    .then(response => {
      if (response.data.authenticated === false) {
        dispatch({
          type: AUTH_CHECK_FAILURE,
          payload: response.data
        })
        window.location.href = '/login'
      }
      else {
        if (typeof response.data.dateOfBirth !== 'undefined' && response.data.dateOfBirth !== null) {
          response.data.dateOfBirth = new Date(response.data.dateOfBirth)
        }
        dispatch({
          type: AUTH_CHECK_SUCCESS,
          payload: response.data
        })
      }
    })
    .catch((err) => {
      dispatch({type: AUTH_ERROR, payload: err})
    })
  }
}
