import AppStash from './AppStash'
import queryString from 'query-string'
import {browserHistory as routerHistory} from 'react-router'

import {
  APP_SET_TARGET_ROUTE,
} from '../app/AppActionTypes'

export function handleForbidenAccess(dispatch, error, url) {
  if (error.hasOwnProperty('response') && error.response.status === 401) {
    dispatch({type: APP_SET_TARGET_ROUTE, payload: url})
    routerHistory.replace('/login')
  }
}

export function getAuthCheckConfig() {
  return AppStash.get('token')
    ? {headers: {'Authorization': `Bearer ${AppStash.get('token')}`}}
    : {}
}

export function getAuthConfig(data) {
  return  {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    body: queryString.stringify(data),
  }
}
