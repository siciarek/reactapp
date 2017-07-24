import {arrayMove} from 'react-sortable-hoc'

import {
  AUTHOR_LIST_FETCH,
  AUTHOR_LIST_FETCH_FULFILLED,
  AUTHOR_LIST_FETCH_REJECTED,
  AUTHOR_ITEM_FETCH,
  AUTHOR_ITEM_FETCH_FULFILLED,
  AUTHOR_ITEM_FETCH_REJECTED,
  AUTHOR_ITEMS_SWAP,
  AUTHOR_ITEMS_SWAP_FULFILLED,
  AUTHOR_ITEMS_SWAP_REJECTED,
} from './Author'

const DEFAULT_STATE = {
  current: {},
  items: [],
}

export default (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case AUTHOR_ITEMS_SWAP: {
      const [src, trg] = action.payload

      return {
        ...state,
        items: [...arrayMove(state.items, src.index, trg.index)],
      }
    }    case AUTHOR_LIST_FETCH: {
      return {
        ...state,
        items: [],
      }
    }
    case AUTHOR_ITEM_FETCH: {
      return {
        ...state,
        current: {},
      }
    }
    case AUTHOR_LIST_FETCH_FULFILLED: {
      return {
        ...state,
        items: action.payload
      }
    }
    case AUTHOR_ITEM_FETCH_FULFILLED: {
      return {
        ...state,
        current: action.payload
      }
    }
    case AUTHOR_LIST_FETCH_REJECTED:
    case AUTHOR_ITEM_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state
  }
}