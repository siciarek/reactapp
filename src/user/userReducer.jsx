import {
  USER_DEFAULT_STATE,
  USER_AUTH_FULFILLED,
  USER_UNAUTH_FULFILLED,
  USER_PROFILE_FETCH_FULFILLED,
  USER_DASHBOARD_FETCH_PENDING,
  USER_PROFILE_FETCH_PENDING,
  USER_AUTH_CHECK_FULFILLED,
  USER_AUTH_CHECK_REJECTED, USER_DASHBOARD_FETCH_FULFILLED,
} from './User'

export default (state = USER_DEFAULT_STATE, action) => {

  switch (action.type) {

    case USER_AUTH_CHECK_FULFILLED:
      return {
        ...state,
        authenticated: true,
      }
    case USER_DASHBOARD_FETCH_FULFILLED:
      return {
        ...state,
        data: action.payload.data,
        authenticated: true,
      }
    case USER_PROFILE_FETCH_FULFILLED:
      return {
        ...state,
        data: action.payload.data,
        authenticated: true,
      }
    case USER_AUTH_FULFILLED:
      return {
        ...state,
        authenticated: true,
      }
    case USER_DASHBOARD_FETCH_PENDING:
    case USER_PROFILE_FETCH_PENDING:
    case USER_AUTH_CHECK_REJECTED:
    case USER_UNAUTH_FULFILLED:
      return {
        ...USER_DEFAULT_STATE,
      }
    default:
      return state
  }
}