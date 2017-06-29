import {
  LYRICS_LIST_FETCH,
  LYRICS_LIST_FETCH_FULLFILLED,
  LYRICS_LIST_FETCH_REJECTED,
  LYRICS_ITEM_FETCH,
  LYRICS_ITEM_FETCH_FULLFILLED,
  LYRICS_ITEM_FETCH_REJECTED,
} from './Lyrics'

const DEFAULT_STATE = {
  current: {},
  items: [],
  fetching: false,
  fetched: false,
  error: null,
}

export default (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case LYRICS_LIST_FETCH: {
      return {
        ...state,
        fetching: true
      }
    }
    case LYRICS_ITEM_FETCH: {
      return {
        ...state,
        current: {},
        fetching: true
      }
    }
    case LYRICS_LIST_FETCH_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    }
    case LYRICS_ITEM_FETCH_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        current: action.payload
      }
    }
    case LYRICS_LIST_FETCH_REJECTED:
    case LYRICS_ITEM_FETCH_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    default:
      return state
  }
}