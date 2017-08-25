import axios from 'axios'
import {browserHistory as routerHistory} from 'react-router'
import AppStash from '../app/AppStash'
import {getAuthCheckConfig} from '../app/AppHelpers'
import config from '../app/config'
import {map} from 'lodash'

import {
  USER_UNAUTH_FULFILLED,

  USER_SAVE,
  USER_AUTH,
  USER_AUTH_CHECK,

  USER_PROFILE_FETCH,
  USER_DASHBOARD_FETCH,
} from './User'

import {
  APP_SET_TARGET_ROUTE,
  APP_UNSET_TARGET_ROUTE,
} from '../app/AppActionTypes'


export const checkIfIsAuthenticated = () => ({
  type: USER_AUTH_CHECK,
  payload: axios.get(config.pingUrl, getAuthCheckConfig())
})

export const fetchUserDashboardData = () => ({
  type: USER_DASHBOARD_FETCH,
  payload: axios.get(config.userDashboardUrl, getAuthCheckConfig())
})

export const fetchUserProfile = () => ({
  type: USER_PROFILE_FETCH,
  payload: axios.get(config.userProfileUrl, getAuthCheckConfig())
})

export const authenticateUser = data => {

  let params = new URLSearchParams();

  map(data, (value, key) => {
    params.append(key, value);
  })

  return {
    type: USER_AUTH,
    payload: axios.post(config.authUrl, params)
    .then(response => {
      AppStash.set('token', response.data.token)
      routerHistory.push('/dashboard')
    })
  }
}

export const unauthenticateUser = () => dispatch => {
  AppStash.remove('token')
  dispatch({type: USER_UNAUTH_FULFILLED})
  routerHistory.replace('/')
}


export const saveUser = data => dispatch => dispatch({
  type: USER_SAVE,
  payload: axios.post(config.userProfileUrl, data, getAuthCheckConfig())
  .catch(error => {
    if (error.hasOwnProperty('response') && error.response.status === 401) {
      dispatch({type: APP_SET_TARGET_ROUTE, payload: '/profile'})
      routerHistory.replace('/login')
    }
  })
})
