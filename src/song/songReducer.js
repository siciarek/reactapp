import {
  ADD_SONG,
  ADD_SONG_FULLFILLED,
  ADD_SONG_REJECTED,
  UPDATE_SONG,
  FETCH_SONG,
  FETCH_SONG_FULLFILLED,
  FETCH_SONG_REJECTED,
  REMOVE_SONG,
  REMOVE_SONG_FULLFILLED,
  REMOVE_SONG_REJECTED,
} from './Song'

export default function reducer(state = {
  current: {},
  items: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case UPDATE_SONG: {
      return {
        ...state,
        current: {...action.payload},
      }
    }
    case FETCH_SONG: {
      return {
        ...state,
        fetching: true,
      }
    }
    case FETCH_SONG_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        current: action.payload
      }
    }
    case ADD_SONG: {
      return {
        ...state,
        fetching: true,
      }
    }
    case ADD_SONG_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload,
      }
    }
    case REMOVE_SONG: {
      return {
        ...state,
        fetching: true,
      }
    }
    case REMOVE_SONG_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
      }
    }
    case REMOVE_SONG_REJECTED:
    case FETCH_SONG_REJECTED:
    case ADD_SONG_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    }
    default:
      return state
  }
}