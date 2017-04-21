import {
  FETCH_ARTIST,
  FETCH_ARTIST_FULLFILLED,
  FETCH_ARTIST_ITEM,
  FETCH_ARTIST_ITEM_FULLFILLED,
  FETCH_ARTIST_REJECTED
} from './Artist'

export default function reducer(state = {
  current: {},
  items: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case FETCH_ARTIST: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_ARTIST_ITEM: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_ARTIST_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case FETCH_ARTIST_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    }
    case FETCH_ARTIST_ITEM_FULLFILLED: {
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