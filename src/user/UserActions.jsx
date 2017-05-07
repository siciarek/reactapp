import axios from 'axios'
import {browserHistory as routerHistory} from 'react-router'
import AppStash from '../app/AppStash'
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


export function updateUser(data) {
  return function (dispatch) {
    dispatch({type: UPDATE_USER, payload: data})
  }
}

export function saveUser(data) {

  return function (dispatch) {
    dispatch({type: SAVE_USER})

    axios
    .put(`${config.userUrl}/${data.id}`, {
      data,
      headers: {
        'Authorization': AppStash.get('token')
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

    axios
    .post(`${config.userUrl}/login`, {username, password})
    .then(response => {
      if (response.data.authenticated === true) {
        AppStash.set('token', response.data.token)
        dispatch({type: AUTH_USER_FULLFILLED, payload: response.data})
        routerHistory.push('/blank')
        routerHistory.push('/dashboard')
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

    axios
    .post(`${config.userUrl}/logout`)
    .then(response => {
      if (response.data.authenticated === false) {
        AppStash.remove('token')
        dispatch({type: UNAUTH_USER_FULLFILLED, payload: response.data})
        routerHistory.push('/blank')
        routerHistory.push('/login')
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
        'Authorization': AppStash.get('token')
      }
    })
    .then(response => {
      if (response.data.authenticated === false) {
        dispatch({
          type: AUTH_CHECK_FAILURE,
          payload: response.data
        })
        routerHistory.push('/blank')
        routerHistory.push('/login')
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
