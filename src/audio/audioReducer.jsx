import {
  FETCH_AUDIO,
  FETCH_AUDIO_FULLFILLED,
  FETCH_AUDIO_ITEM,
  FETCH_AUDIO_ITEM_FULLFILLED,
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
    case FETCH_AUDIO: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_AUDIO_ITEM: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_AUDIO_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case FETCH_AUDIO_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    }
    case FETCH_AUDIO_ITEM_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        current: action.payload
      }
    }
    default:
      return state
  }
}