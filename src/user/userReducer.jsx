import {
  USER_DEFAULT_STATE,
  USER_PROFILE_FETCH_FULFILLED,
  USER_UPDATE,
  USER_SAVE_FULFILLED,
  USER_SAVE_REJECTED,
  USER_AUTH,
  USER_AUTH_FULFILLED,
  USER_AUTH_REJECTED,
  USER_UNAUTH,
  USER_UNAUTH_FULFILLED,
  USER_UNAUTH_REJECTED,
  USER_AUTH_CHECK,
  USER_AUTH_CHECK_SUCCESS,
  USER_AUTH_CHECK_FAILURE,
} from './User'

export default (state = USER_DEFAULT_STATE, action) => {

  switch (action.type) {
    case USER_PROFILE_FETCH_FULFILLED:
      return {
        ...state,
        ...action.payload,
        error: '',
        message: '',
      }
    case USER_AUTH:
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
    case USER_AUTH_CHECK_FAILURE:
      return {
        ...state,
        error: action.payload,
        authenticated: false
      }
    case USER_AUTH_CHECK_SUCCESS:
      return {
        ...state,
        error: '',
        authenticated: true,
      }
    case USER_UPDATE:
      return {
        ...state,
        ...action.payload,
        error: ''
      }
    default:
      return state
  }
}