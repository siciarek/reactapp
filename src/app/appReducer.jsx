import {
  APP_START_PROCESSING,
  APP_END_PROCESSING,
  APP_ERROR_OCCURRED,
  APP_ERROR_HIDE,
} from './AppActionTypes'

export default function reducer(state = {
  processing: false,
  error: null,
}, action) {

  switch (action.type) {
    case APP_START_PROCESSING: {
      return {
        ...state,
        processing: true
      }
    }
    case APP_END_PROCESSING: {
      return {
        ...state,
        processing: false
      }
    }
    case APP_ERROR_OCCURRED: {
      return {
        ...state,
        processing: false,
        error: action.payload,
      }
    }
    case APP_ERROR_HIDE: {
      return {
        ...state,
        error: null,
      }
    }
    default:
      return state
  }
}