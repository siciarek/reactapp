import {
  FETCH_AUDIO_FULFILLED,
  FETCH_AUDIO_ITEM_FULFILLED,
} from './Audio'

const DEFAULT_STATE = {
  current: [],
  items: [],
}

export default (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case FETCH_AUDIO_FULFILLED: {
      return {
        ...state,
        items: action.payload.data
      }
    }
    case FETCH_AUDIO_ITEM_FULFILLED: {
      return {
        ...state,
        current: action.payload.data
      }
    }
    default:
      return state
  }
}