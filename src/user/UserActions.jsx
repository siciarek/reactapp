import axios from 'axios'
import {browserHistory as routerHistory} from 'react-router'

import AppStash from '../app/AppStash'
import {getAuthHeaders}  from '../app/AppHelpers'
import config from '../app/config'
import {
  USER_PROFILE_FETCH,
  USER_PROFILE_FETCH_FULLFILLED,
  USER_PROFILE_FETCH_REJECTED,

  USER_UPDATE,
  USER_SAVE,
  USER_SAVE_FULLFILLED,
  USER_SAVE_REJECTED,
  USER_AUTH,
  USER_AUTH_FULLFILLED,
  USER_UNAUTH_FULLFILLED,
  USER_AUTH_ERROR,
  USER_AUTH_CHECK_FAILURE,
} from './User'

import {
  APP_SET_TARGET_ROUTE,
} from '../app/AppActionTypes'

export function fetchUserProfile() {

  return function (dispatch) {
    dispatch({type: USER_PROFILE_FETCH})

    axios
    .get(config.userProfileUrl, getAuthHeaders())
    .then((response) => {
      dispatch({
        type: USER_PROFILE_FETCH_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((error) => {
      dispatch({type: USER_PROFILE_FETCH_REJECTED, payload: error})

      if (error.hasOwnProperty('response') && error.response.status === 401) {
        dispatch({type: APP_SET_TARGET_ROUTE, payload: '/profile'})
        routerHistory.replace('/login')
      }
    })
  }
}


export function saveUser(data) {

  return function (dispatch) {
    dispatch({type: USER_SAVE})
    axios
    .put(config.userProfileUrl, data, getAuthHeaders())
    .then((response) => {
      dispatch({
        type: USER_SAVE_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((error) => {
      dispatch({type: USER_SAVE_REJECTED, payload: error})
    })
  }
}

export function authenticateUser({username, password}) {
  const url = `${config.authUrl}`

  return function (dispatch) {
    dispatch({type: USER_AUTH})

    const cnf = {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: `username=${username}&password=${password}`,
    }

    fetch(url, cnf)
    .then(response => {
      return response.json()
    })
    .then(response => {
      if (response.hasOwnProperty('token')) {
        AppStash.set('token', response.token)
        dispatch({type: USER_AUTH_FULLFILLED, payload: response.data})
        routerHistory.replace('/dashboard')
      }
      else {
        dispatch({type: USER_AUTH_CHECK_FAILURE, payload: response})
      }
    })
    .catch((error) => {
      dispatch({type: USER_AUTH_ERROR, payload: error})
    })
  }
}

export function updateUser(data) {
  return function (dispatch) {
    dispatch({type: USER_UPDATE, payload: data})
  }
}

export function unauthenticateUser() {
  return function (dispatch) {
    dispatch({type: USER_UNAUTH_FULLFILLED})
    AppStash.remove('token')
    routerHistory.replace('/')
  }
}
