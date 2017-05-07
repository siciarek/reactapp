import {
  ARTIST_LIST_FETCH,
  ARTIST_LIST_FETCH_FULLFILLED,
  ARTIST_LIST_FETCH_REJECTED,
  ARTIST_ITEM_FETCH,
  ARTIST_ITEM_FETCH_FULLFILLED,
  ARTIST_ITEM_FETCH_REJECTED
} from './Artist'

const DEFAULT_STATE = {
  current: {},
  items: [],
  fetching: false,
  fetched: false,
  error: null,
}

export default function reducer(state = DEFAULT_STATE, action) {

  switch (action.type) {
    case ARTIST_LIST_FETCH: {
      return {
        ...state,
        fetching: true
      }
    }
    case ARTIST_ITEM_FETCH: {
      return {
        ...state,
        current: {},
        fetching: true
      }
    }
    case ARTIST_LIST_FETCH_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    }
    case ARTIST_ITEM_FETCH_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        current: action.payload
      }
    }
    case ARTIST_LIST_FETCH_REJECTED:
    case ARTIST_ITEM_FETCH_REJECTED: {
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