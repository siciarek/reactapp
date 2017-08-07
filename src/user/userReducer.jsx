import {
  USER_DEFAULT_STATE,
  USER_PROFILE_FETCH_FULFILLED,
  USER_SAVE_FULFILLED,
  USER_SAVE_REJECTED,
  USER_AUTH_PENDING,
  USER_AUTH_FULFILLED,
  USER_AUTH_REJECTED,
  USER_UNAUTH,
  USER_UNAUTH_FULFILLED,
  USER_UNAUTH_REJECTED,
  USER_AUTH_CHECK,
  USER_AUTH_CHECK_FULFILLED,
  USER_AUTH_CHECK_REJECTED,
} from './User'

export default (state = USER_DEFAULT_STATE, action) => {

  switch (action.type) {
    case USER_AUTH_PENDING:
      return {
        ...state,
        error: '',
        message: 'Authentication in progress.',
      }
    case USER_AUTH_FULFILLED:
      return {
        ...state,
        message: 'User authentication succeeed.',
        authenticated: true
      }
    case USER_AUTH_REJECTED:
      return {
        ...state,
        error: action.payload
      }

    case USER_PROFILE_FETCH_FULFILLED:
      return {
        ...state,
        ...action.payload,
        error: '',
        message: '',
      }

    case USER_UNAUTH:
      return {
        ...state,
        message: 'Unauthentication in progress.',
      }
    case USER_UNAUTH_FULFILLED:
      return {...USER_DEFAULT_STATE}
    case USER_UNAUTH_REJECTED:
      return {
        ...state,
        error: action.payload
      }
    case USER_AUTH_CHECK:
      return {
        ...state,
        error: '',
        message: 'Authentication check in progress.',
      }
    case USER_SAVE_REJECTED:
      return {
        ...state,
        error: (typeof action.payload.data.msg !== 'undefined' ? action.payload.data.msg : 'User profile can not be saved.'),
        message: '',
      }
    case USER_SAVE_FULFILLED:
      return {
        ...state,
        error: '',
        message: 'User profile updated successfully.',
      }
    case USER_AUTH_CHECK_REJECTED:
      return {
        ...state,
        authenticated: false
      }
    case USER_AUTH_CHECK_FULFILLED:
      return {
        ...state,
        authenticated: true,
      }
    default:
      return state
  }
}