import axios from 'axios'
import {browserHistory as routerHistory} from 'react-router'
import AppStash from '../app/AppStash'
import {getAuthCheckConfig} from '../app/AppHelpers'
import config from '../app/config'
import {map} from 'lodash'

import {
  USER_UNAUTH_FULFILLED,

  USER_PROFILE_FETCH,
  USER_PROFILE_FETCH_FULFILLED,
  USER_PROFILE_FETCH_REJECTED,

  USER_SAVE,
  USER_AUTH,
  USER_AUTH_CHECK,
} from './User'

import {
  APP_SET_TARGET_ROUTE,
  APP_UNSET_TARGET_ROUTE,
} from '../app/AppActionTypes'

export const checkIfIsAuthenticated = () => dispatch => dispatch({
  type: USER_AUTH_CHECK,
  payload: axios.get(config.pingUrl, getAuthCheckConfig())
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

export const fetchUserDashboardData = props => {

  return dispatch => {

    if (typeof props.redirectTo !== 'undefined' && props.redirectTo !== null) {
      const route = props.redirectTo
      dispatch({type: APP_UNSET_TARGET_ROUTE})
      routerHistory.replace(route)
      return true
    }

    // TODO: move to separate function
    dispatch({type: USER_PROFILE_FETCH})

    axios
    .get(config.userProfileUrl, getAuthCheckConfig())
    .then((response) => {

      dispatch({
        type: USER_PROFILE_FETCH_FULFILLED,
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

export const fetchUserProfile = () => dispatch => dispatch({
  type: USER_PROFILE_FETCH, payload: axios.get(config.userProfileUrl, getAuthCheckConfig())
  .catch(error => {
    if (error.hasOwnProperty('response') && error.response.status === 401) {
      dispatch({type: APP_SET_TARGET_ROUTE, payload: '/profile'})
      routerHistory.replace('/login')
    }
  })
})

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
