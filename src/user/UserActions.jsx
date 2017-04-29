import axios from 'axios'
import {Cookies} from 'react-cookie'

import config from '../app/config'
import {
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

//
// export function errorHandler(dispatch, error, type) {
//   console.info(error)
//   return
//   let errorMessage = ''
//
//   if (error.data.error) {
//     errorMessage = error.data.error
//   } else if (error.data) {
//     errorMessage = error.data
//   } else {
//     errorMessage = error
//   }
//
//   if (error.status === 401) {
//     dispatch({
//       type: type,
//       payload: 'You are not authorized to do this. Please login and try again.'
//     })
//     logoutUser()
//   } else {
//     dispatch({
//       type: type,
//       payload: errorMessage
//     })
//   }
// }
//
// export function loginUser({username, password}) {
//   return function (dispatch) {
//     axios.post(`${API_URL}/login`, {username, password})
//     .then(response => {
//       cookie.set('token', response.data.token, {path: '/'})
//       dispatch({type: AUTH_USER})
//       window.location.href = '/dashboard'
//     })
//     .catch((error) => {
//       errorHandler(dispatch, error.response, AUTH_ERROR)
//     })
//   }
// }
//
// export function logoutUser() {
//   return function (dispatch) {
//     axios.post(`${API_URL}/logout`)
//     .then(response => {
//       dispatch({type: UNAUTH_USER})
//       cookie.remove('token', {path: '/'})
//
//       window.location.href = '/login'
//     })
//     .catch((error) => {
//       errorHandler(dispatch, error.response, AUTH_ERROR)
//     })
//   }
// }
//
// export function authCheck() {
//   return function (dispatch) {
//     axios.get(`${API_URL}/auth`, {
//       headers: {
//         'Authorization': cookie.get('token')
//       }
//     })
//     .then(response => {
//       if (typeof response.data.authenticated !== 'undefined' && response.data.authenticated === true) {
//         // cookie.set('token', response.data.token, {path: '/'})
//         dispatch({
//           type: AUTH_CHECK,
//           payload: response.data
//         })
//       }
//     })
//     .catch((error) => {
//       errorHandler(dispatch, error.response, AUTH_ERROR)
//     })
//   }
// }
