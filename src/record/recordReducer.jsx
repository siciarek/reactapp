import {
  FETCH_RECORD_LIST_FULFILLED,
  FETCH_RECORD_ITEM_FULFILLED,
} from './Record'

const defaultState = {
  current: {},
  items: [],
}

export default (state = defaultState, action) => {

  switch (action.type) {
    case FETCH_RECORD_LIST_FULFILLED: {
      return {
        ...state,
        items: action.payload.data
      }
    }
    case FETCH_RECORD_ITEM_FULFILLED: {
      return {
        ...state,
        current:  action.payload.data
      }
    }
    default:
      return state
  }
}