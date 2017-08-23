import {
  FETCH_AUDIO,
  FETCH_AUDIO_FULFILLED,
  FETCH_AUDIO_ITEM,
  FETCH_AUDIO_ITEM_FULFILLED,
  FETCH_AUDIO_REJECTED
} from './Audio'

const DEFAULT_STATE = {
  current: [],
  items: [],
  fetching: false,
  fetched: false,
  error: null,
}

export default (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case FETCH_AUDIO_REJECTED: {
      return {
        ...state,
        error: action.payload
      }
    }
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