import {
  USER_UPDATE,
  USER_SAVE_FULLFILLED,
  USER_SAVE_REJECTED,
  USER_AUTH,
  USER_UNAUTH,
  USER_AUTH_FULLFILLED,
  USER_UNAUTH_FULLFILLED,
  USER_AUTH_ERROR,
  USER_AUTH_CHECK,
  USER_AUTH_CHECK_SUCCESS,
  USER_AUTH_CHECK_FAILURE,
} from './User'

const INITIAL_STATE = {
  error: '',
  message: '',
  dateOfBirth: null,
  gender: null,
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  skillLevel: 0,
  authenticated: false,
}

export default function (state = INITIAL_STATE, action) {

  switch (action.type) {
    case USER_AUTH:
      return {
        ...state,
        error: '',
        message: 'Authentication in progress.',
      }
    case USER_AUTH_FULLFILLED:
      return {
        ...state,
        username: action.payload.username,
        message: 'User authentication succeeed.',
        authenticated: true
      }
    case USER_UNAUTH:
      return {
        ...state,
        message: 'Unauthentication in progress.',
      }
    case USER_UNAUTH_FULLFILLED:
      return INITIAL_STATE
    case USER_AUTH_ERROR:
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
    case USER_SAVE_FULLFILLED:
      return {
        ...state,
        error: '',
        message: action.payload,
      }
    case USER_AUTH_CHECK_FAILURE:
      return {
        ...state,
        error: 'Invalid access data.',
        authenticated: false
      }
    case USER_AUTH_CHECK_SUCCESS:
    case USER_UPDATE:
      // TODO: wyrzucić przypisywanie wartości do akcji
      return {
        ...state,
        error: '',
        authenticated: true,
      }
    default:
      return state
  }
}