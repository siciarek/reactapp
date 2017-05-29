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
}

export default function reducer(state = DEFAULT_STATE, action) {

  switch (action.type) {
    case ARTIST_LIST_FETCH: {
      return {
        ...state,
        items: [],
      }
    }
    case ARTIST_ITEM_FETCH: {
      return {
        ...state,
        current: {},
      }
    }
    case ARTIST_LIST_FETCH_FULLFILLED: {
      return {
        ...state,
        items: action.payload
      }
    }
    case ARTIST_ITEM_FETCH_FULLFILLED: {
      return {
        ...state,
        current: action.payload
      }
    }
    case ARTIST_LIST_FETCH_REJECTED:
    case ARTIST_ITEM_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state
  }
}