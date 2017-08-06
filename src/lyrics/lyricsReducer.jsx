import {
  LYRICS_LIST_FETCH_FULFILLED,
  LYRICS_LIST_FETCH_REJECTED,
  LYRICS_ITEM_FETCH_FULFILLED,
  LYRICS_ITEM_FETCH_REJECTED,
} from './Lyrics'

const DEFAULT_STATE = {
  current: {},
  items: [],
  error: null,
}

export default (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case LYRICS_LIST_FETCH_FULFILLED: {
      return {
        ...state,
        items: action.payload.data
      }
    }
    case LYRICS_ITEM_FETCH_FULFILLED: {
      console.log(action.payload)
      return {
        ...state,
        current: action.payload.data
      }
    }
    case LYRICS_LIST_FETCH_REJECTED:
    case LYRICS_ITEM_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.data
      }
    }
    default:
      return state
  }
}