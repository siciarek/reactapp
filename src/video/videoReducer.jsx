import {
  FETCH_VIDEO,
  FETCH_VIDEO_FULFILLED,
  FETCH_VIDEO_ITEM,
  FETCH_VIDEO_ITEM_FULFILLED,
  FETCH_VIDEO_REJECTED
} from './Video'

const DEFAULT_STATE = {
  current: [],
  items: [],
  fetching: false,
  fetched: false,
  error: null,
}

export default (state = DEFAULT_STATE, action) => {

    switch (action.type) {
    case FETCH_VIDEO: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_VIDEO_ITEM: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_VIDEO_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case FETCH_VIDEO_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    }
    case FETCH_VIDEO_ITEM_FULFILLED: {
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