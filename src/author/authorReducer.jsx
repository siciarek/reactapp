import {
  AUTHOR_LIST_FETCH,
  AUTHOR_LIST_FETCH_FULLFILLED,
  AUTHOR_LIST_FETCH_REJECTED,
  AUTHOR_ITEM_FETCH,
  AUTHOR_ITEM_FETCH_FULLFILLED,
  AUTHOR_ITEM_FETCH_REJECTED
} from './Author'

const DEFAULT_STATE = {
  current: {},
  items: [],
  fetching: false,
  fetched: false,
  error: null,
}

export default function reducer(state = DEFAULT_STATE, action) {

  switch (action.type) {
    case AUTHOR_LIST_FETCH: {
      return {
        ...state,
        items: [],
        fetching: true
      }
    }
    case AUTHOR_ITEM_FETCH: {
      return {
        ...state,
        current: {},
        fetching: true
      }
    }
    case AUTHOR_LIST_FETCH_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    }
    case AUTHOR_ITEM_FETCH_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        current: action.payload
      }
    }
    case AUTHOR_LIST_FETCH_REJECTED:
    case AUTHOR_ITEM_FETCH_REJECTED: {
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