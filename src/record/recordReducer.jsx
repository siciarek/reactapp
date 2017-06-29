import {
  FETCH_RECORD_LIST,
  FETCH_RECORD_LIST_FULLFILLED,
  FETCH_RECORD_LIST_REJECTED,
  FETCH_RECORD_ITEM,
  FETCH_RECORD_ITEM_FULLFILLED,
  FETCH_RECORD_ITEM_REJECTED,
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
      console.log(JSON.stringify(action.payload))
      return {
        ...state,
        current:  action.payload
      }
    }
    default:
      return state
  }
}