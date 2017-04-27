import {
  FETCH_AUTHOR,
  FETCH_AUTHOR_FULLFILLED,
  FETCH_AUTHOR_ITEM,
  FETCH_AUTHOR_ITEM_FULLFILLED,
  FETCH_AUTHOR_REJECTED
} from './Author'

export default function reducer(state = {
  current: {},
  items: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case FETCH_AUTHOR: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_AUTHOR_ITEM: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_AUTHOR_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case FETCH_AUTHOR_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    }
    case FETCH_AUTHOR_ITEM_FULLFILLED: {
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