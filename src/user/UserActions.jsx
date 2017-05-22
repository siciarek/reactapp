import axios from 'axios'
import {browserHistory as routerHistory} from 'react-router'
//import {routerHistory} from '../app/routes'

import AppStash from '../app/AppStash'
import config from '../app/config'
import {
  USER_UPDATE,
  USER_SAVE,
  USER_SAVE_FULLFILLED,
  USER_SAVE_REJECTED,
  USER_AUTH,
  USER_UNAUTH,
  USER_AUTH_FULLFILLED,
  USER_UNAUTH_FULLFILLED,
  USER_AUTH_ERROR,
  USER_AUTH_CHECK,
  USER_AUTH_CHECK_SUCCESS,
  USER_AUTH_CHECK_FAILURE,
} from './User'


export function updateUser(data) {
  return function (dispatch) {
    dispatch({type: USER_UPDATE, payload: data})
  }
}

export function saveUser(data) {

  return function (dispatch) {
    dispatch({type: USER_SAVE})

    axios
    .put(`${config.userUrl}/${data.id}`, {
      data,
      headers: {
        'Authorization': AppStash.get('token')
      }
    })
    .then((response) => {
      dispatch({
        type: USER_SAVE_FULLFILLED,
        payload: response.data.msg,
      })
    })
    .catch((err) => {
      dispatch({type: USER_SAVE_REJECTED, payload: err})
    })
  }
}

export function authenticateUser({username, password}) {
  return function (dispatch) {
    dispatch({type: USER_AUTH})

    axios
    .post(`${config.userUrl}/login`, {username, password})
    .then(response => {
      if (response.data.authenticated === true) {
        AppStash.set('token', response.data.token)
        dispatch({type: USER_AUTH_FULLFILLED, payload: response.data})
        routerHistory.replace('/dashboard')
      }
      else {
        dispatch({type: USER_AUTH_CHECK_FAILURE, payload: response.data})
      }
    })
    .catch((err) => {
      dispatch({type: USER_AUTH_ERROR, payload: err})
    })
  }
}

export function unauthenticateUser() {
  return function (dispatch) {
    dispatch({type: USER_UNAUTH})

    axios
    .post(`${config.userUrl}/logout`)
    .then(response => {
        AppStash.remove('token')
        dispatch({type: USER_UNAUTH_FULLFILLED, payload: {}})
        routerHistory.push('/blank')
        routerHistory.push('/login')
    })
    .catch((err) => {
      dispatch({type: USER_AUTH_ERROR, payload: err})
    })
  }
}

export function authCheck() {

  return function (dispatch) {
    dispatch({type: USER_AUTH_CHECK})

    axios.get(`${config.userUrl}/auth`, {
      headers: {
        'Authorization': AppStash.get('token')
      }
    })
    .then(response => {
      if (response.data.authenticated === false) {
        dispatch({
          type: USER_AUTH_CHECK_FAILURE,
          payload: response.data
        })
        routerHistory.replace('/login')
      }
      else {
        if (typeof response.data.dateOfBirth !== 'undefined' && response.data.dateOfBirth !== null) {
          response.data.dateOfBirth = new Date(response.data.dateOfBirth)
        }
        dispatch({
          type: USER_AUTH_CHECK_SUCCESS,
          payload: response.data
        })
      }
    })
    .catch((err) => {
      dispatch({type: USER_AUTH_ERROR, payload: err})
    })
  }
}
