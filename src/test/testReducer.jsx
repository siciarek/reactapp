import {arrayMove} from 'react-sortable-hoc'

import {
  TEST_LIST_FETCH,
  TEST_LIST_FETCH_FULLFILLED,
  TEST_LIST_FETCH_REJECTED,
  TEST_ITEM_FETCH,
  TEST_ITEM_FETCH_FULLFILLED,
  TEST_ITEM_FETCH_REJECTED,
  TEST_ITEMS_SWAP,
} from './Test'

const DEFAULT_STATE = {
  current: {},
  items: [],
  fetching: false,
  fetched: false,
  error: null,
}

export default function reducer(state = DEFAULT_STATE, action) {

  switch (action.type) {
    case TEST_ITEMS_SWAP: {
      const [oldIndex,newIndex] = action.payload

      return {
        ...state,
        fetching: false,
        fetched: true,
        items: [...arrayMove(state.items, oldIndex, newIndex)],
      }
    }
    case TEST_LIST_FETCH: {
      return {
        ...state,
        fetching: true
      }
    }
    case TEST_ITEM_FETCH: {
      return {
        ...state,
        current: {},
        fetching: true
      }
    }
    case TEST_LIST_FETCH_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
    }
    case TEST_ITEM_FETCH_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        current: action.payload
      }
    }
    case TEST_LIST_FETCH_REJECTED:
    case TEST_ITEM_FETCH_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    default:
      return state
  }
}