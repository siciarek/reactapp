import {
  ADD_SONG,
  ADD_SONG_FULLFILLED,
  ADD_SONG_REJECTED,
} from './Song'

export default function reducer(state = {
  current: {},
  items: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case ADD_SONG: {
      return {
        ...state,
        fetching: true
      }
    }
    case ADD_SONG_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case ADD_SONG_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    }
    default:
      return state
  }
}