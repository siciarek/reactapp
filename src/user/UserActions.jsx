import axios from 'axios'
import {browserHistory as routerHistory} from 'react-router'
import AppStash from '../app/AppStash'
import {getAuthCheckConfig} from '../app/AppHelpers'
import config from '../app/config'
import {map} from 'lodash'

import {
  USER_PROFILE_FETCH,
  USER_PROFILE_FETCH_FULFILLED,
  USER_PROFILE_FETCH_REJECTED,

  USER_UPDATE,
  USER_SAVE,
  USER_SAVE_FULFILLED,
  USER_SAVE_REJECTED,
  USER_AUTH,
  USER_AUTH_FULFILLED,
  USER_UNAUTH_FULFILLED,
  USER_AUTH_REJECTED,
  USER_AUTH_CHECK_SUCCESS,
  USER_AUTH_CHECK_FAILURE,
} from './User'
import {
  APP_SET_TARGET_ROUTE,
  APP_UNSET_TARGET_ROUTE,
} from '../app/AppActionTypes'

export const authenticateUser = data => {

  let params = new URLSearchParams();

  map(data, (value, key) => {
    params.append(key, value);
  })

  return dispatch => {

    dispatch({type: USER_AUTH})

    axios
    .post(config.authUrl, params)
    .then(({data}) => {
      dispatch({type: USER_AUTH_FULFILLED})
      AppStash.set('token', data.token)
      routerHistory.replace('/dashboard')
    })
    .catch((error) => {
      dispatch({type: USER_AUTH_REJECTED, payload: error})
    })
  }
}

export const checkIfIsAuthenticated = () => {
  return dispatch => {
    axios
    .get(config.pingUrl, getAuthCheckConfig())
    .then((response) => {
      dispatch({type: USER_AUTH_CHECK_SUCCESS})
    })
    .catch((error) => {
      dispatch({type: USER_AUTH_CHECK_FAILURE})
    })
  }
}

export const unauthenticateUser = () => {
  return dispatch => {
    AppStash.remove('token')
    dispatch({type: USER_UNAUTH_FULFILLED})
    routerHistory.replace('/')
  }
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

export  const fetchUserProfile = () => {

  return dispatch => {

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

export const updateUser = data => {
  return dispatch => {
    dispatch({type: USER_UPDATE, payload: data})
  }
}

export const saveUser = data => {

  return dispatch => {

    dispatch({type: USER_SAVE})

    axios
    .post(config.userProfileUrl, data, getAuthCheckConfig())
    .then(() => {
      dispatch({type: USER_SAVE_FULFILLED})
    })
    .catch((error) => {
      dispatch({type: USER_SAVE_REJECTED, payload: error})
    })
  }
}
