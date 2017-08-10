import {
  SONG_ITEM_SAVE_PENDING,
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

const initialState = {
  current: {},
  items: [],
  error: null,
}

export default (state = initialState, action) => {

  switch (action.type) {
    case SONG_ITEM_FETCH_FULFILLED: {
      return {
        ...state,
        current: {...action.payload.data}
      }
    }
    case SONG_ITEM_REMOVE_REJECTED:
    case SONG_ITEM_FETCH_REJECTED:
    case SONG_ITEM_SAVE_REJECTED: {
      return {
        ...state,
        error: action.payload.data,
      }
    }
    default:
      return state
  }
}