import axios from 'axios'
import {browserHistory as routerHistory} from 'react-router'

import AppStash from '../app/AppStash'
import config from '../app/config'
import {
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
    .catch((err) => {
      dispatch({type: USER_AUTH_ERROR, payload: err})
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
