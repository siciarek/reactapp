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
}

export default (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case AUTHOR_LIST_FETCH: {
      return {
        ...state,
        items: [],
      }
    }
    case AUTHOR_ITEM_FETCH: {
      return {
        ...state,
        current: {},
      }
    }
    case AUTHOR_LIST_FETCH_FULLFILLED: {
      return {
        ...state,
        items: action.payload
      }
    }
    case AUTHOR_ITEM_FETCH_FULLFILLED: {
      return {
        ...state,
        current: action.payload
      }
    }
    case AUTHOR_LIST_FETCH_REJECTED:
    case AUTHOR_ITEM_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state
  }
}