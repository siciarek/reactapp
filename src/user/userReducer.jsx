import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_USER_FULLFILLED,
  UNAUTH_USER_FULLFILLED,
  AUTH_ERROR,
  AUTH_CHECK,
  AUTH_CHECK_SUCCESS,
  AUTH_CHECK_FAILURE,
} from './User'

const INITIAL_STATE = {
  error: '',
  message: '',
  firstName: 'John',
  lastName: 'Doe',
  username: '',
  email: '',
  authenticated: false,
}

export default function (state = INITIAL_STATE, action) {

  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        error: '',
        message: 'Authentication in progress.',
      }
    case AUTH_USER_FULLFILLED:
      return {
        ...state,
        email: action.payload.email,
        authenticated: true
      }
    case UNAUTH_USER:
      return {
        ...state,
        message: 'Unauthentication in progress.',
      }
    case UNAUTH_USER_FULLFILLED:
      return {
        ...state,
        INITIAL_STATE,
      }
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case AUTH_CHECK:
      return {
        ...state,
        error: '',
        message: 'Authentication check in progress.',
      }
    case AUTH_CHECK_FAILURE:
      return {
        ...state,
        error: 'Invalid access data.',
        authenticated: false
      }
    case AUTH_CHECK_SUCCESS:

      return {
        ...state,
        error: '',
        message: '',
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        username: action.payload.username,
        email: action.payload.email,
        authenticated: action.payload.authenticated,
      }
    default:
      return state
  }
}