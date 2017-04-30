import {
  APP_START_PROCESSING,
  APP_END_PROCESSING,
} from './AppActionTypes'

export default function reducer(state = {
  processing: false,
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
    default:
      return state
  }
}