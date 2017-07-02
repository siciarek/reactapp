import {
  FETCH_RECORD_LIST_FULLFILLED,
  FETCH_RECORD_ITEM_FULLFILLED,
} from './Record'

const DEFAULT_STATE = {
  current: {},
  items: [],
}

export default (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case FETCH_RECORD_LIST_FULLFILLED: {
      return {
        ...state,
        items: action.payload
      }
    }
    case FETCH_RECORD_ITEM_FULLFILLED: {
      return {
        ...state,
        current:  action.payload
      }
    }
    default:
      return state
  }
}