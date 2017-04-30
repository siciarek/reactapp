import {
  FETCH_VIDEO,
  FETCH_VIDEO_FULLFILLED,
  FETCH_VIDEO_ITEM,
  FETCH_VIDEO_ITEM_FULLFILLED,
  FETCH_VIDEO_REJECTED
} from './Video'

export default function reducer(state = {
  current: {},
  items: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

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
    case FETCH_VIDEO_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    }
    case FETCH_VIDEO_ITEM_FULLFILLED: {
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