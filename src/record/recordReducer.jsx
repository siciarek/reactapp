import {
  FETCH_RECORD_LIST_FULFILLED,
  FETCH_RECORD_ITEM_FULFILLED,
} from './Record'

const DEFAULT_STATE = {
  current: {},
  items: [],
}

export default (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case FETCH_RECORD_LIST_FULFILLED: {
      return {
        ...state,
        items: action.payload
      }
    }
    case FETCH_RECORD_ITEM_FULFILLED: {
      return {
        ...state,
        current:  action.payload
      }
    }
    default:
      return state
  }
}