import AppStash from './AppStash'
import queryString from 'query-string'
import {browserHistory as routerHistory} from 'react-router'
import {unauthenticateUser} from '../user/UserActions'

import {
  APP_SET_TARGET_ROUTE,
} from '../app/AppActionTypes'

export const handleForbidenAccess = (dispatch, action, url) => {
  dispatch(action)

  if (action.payload.response.status === 401) {
    dispatch({type: APP_SET_TARGET_ROUTE, payload: url})
    routerHistory.push('/login')
  }
}

export const getAuthCheckConfig = () => {
  return AppStash.get('token')
    ? {headers: {'Authorization': `Bearer ${AppStash.get('token')}`}}
    : {}
}
