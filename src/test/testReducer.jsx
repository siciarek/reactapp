import {arrayMove} from 'react-sortable-hoc'

import {
  TEST_LIST_FETCH,
  TEST_LIST_FETCH_FULLFILLED,
  TEST_LIST_FETCH_REJECTED,
  TEST_ITEM_FETCH,
  TEST_ITEM_FETCH_FULLFILLED,
  TEST_ITEM_FETCH_REJECTED,
  TEST_ITEMS_SWAP,
  TEST_ITEMS_SWAP_FULLFILLED,
} from './Test'

const DEFAULT_STATE = {
  current: {},
  items: [],
  error: null,
}

export default function reducer(state = DEFAULT_STATE, action) {

  switch (action.type) {
    case TEST_ITEMS_SWAP: {
      const [src, trg] = action.payload

      return {
        ...state,
        items: [...arrayMove(state.items, src.index, trg.index)],
      }
    }
    case TEST_LIST_FETCH: {
      return {
        ...state,
      }
    }
    case TEST_ITEM_FETCH: {
      return {
        ...state,
        current: {},
      }
    }
    case TEST_LIST_FETCH_FULLFILLED: {
      return {
        ...state,
        items: action.payload
      }
    }
    case TEST_ITEM_FETCH_FULLFILLED: {
      return {
        ...state,
        current: action.payload
      }
    }
    case TEST_ITEMS_SWAP_FULLFILLED:
    case TEST_LIST_FETCH_REJECTED:
    case TEST_ITEM_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state
  }
}