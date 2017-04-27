import {
  FETCH_LYRICS,
  FETCH_LYRICS_FULLFILLED,
  FETCH_LYRICS_ITEM,
  FETCH_LYRICS_ITEM_FULLFILLED,
  FETCH_LYRICS_REJECTED
} from './Lyrics'

export default function reducer(state = {
  current: {},
  items: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case FETCH_LYRICS: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_LYRICS_ITEM: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_LYRICS_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case FETCH_LYRICS_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    }
    case FETCH_LYRICS_ITEM_FULLFILLED: {
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