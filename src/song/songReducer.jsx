import {
  SONG_ITEM_SAVE,
  SONG_ITEM_SAVE_FULFILLED,
  SONG_ITEM_SAVE_REJECTED,
  SONG_ITEM_UPDATE,
  SONG_ITEM_FETCH,
  SONG_ITEM_FETCH_FULFILLED,
  SONG_ITEM_FETCH_REJECTED,
  SONG_ITEM_REMOVE,
  SONG_ITEM_REMOVE_FULFILLED,
  SONG_ITEM_REMOVE_REJECTED,
} from './Song'

const DEFAULT_STATE = {
  current: {},
  items: [],
  fetching: false,
  fetched: false,
  error: null,
}

export default (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case SONG_ITEM_UPDATE: {
      return {
        ...state,
        current: {...action.payload},
      }
    }
    case SONG_ITEM_FETCH: {
      return {
        ...state,
        fetching: true,
      }
    }
    case SONG_ITEM_FETCH_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        current: {...action.payload}
      }
    }
    case SONG_ITEM_SAVE: {
      return {
        ...state,
        fetching: true,
      }
    }
    case SONG_ITEM_SAVE_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload,
      }
    }
    case SONG_ITEM_REMOVE: {
      return {
        ...state,
        fetching: true,
      }
    }
    case SONG_ITEM_REMOVE_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
      }
    }
    case SONG_ITEM_REMOVE_REJECTED:
    case SONG_ITEM_FETCH_REJECTED:
    case SONG_ITEM_SAVE_REJECTED: {
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