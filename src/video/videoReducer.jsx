import {
  FETCH_VIDEO_FULFILLED,
  FETCH_VIDEO_ITEM_FULFILLED,
} from './Video'

const DEFAULT_STATE = {
  current: [],
  items: [],
}

export default (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case FETCH_VIDEO_FULFILLED: {
      return {
        ...state,
        items: action.payload.data
      }
    }
    case FETCH_VIDEO_ITEM_FULFILLED: {
      return {
        ...state,
        current: action.payload.data
      }
    }
    default:
      return state
  }
}