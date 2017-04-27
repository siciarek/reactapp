import {
  FETCH_MUSIC,
  FETCH_MUSIC_FULLFILLED,
  FETCH_MUSIC_ITEM,
  FETCH_MUSIC_ITEM_FULLFILLED,
  FETCH_MUSIC_REJECTED
} from './Music'

export default function reducer(state = {
  current: {},
  items: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case FETCH_MUSIC: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_MUSIC_ITEM: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_MUSIC_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case FETCH_MUSIC_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    }
    case FETCH_MUSIC_ITEM_FULLFILLED: {
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