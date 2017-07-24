import {arrayMove} from 'react-sortable-hoc'

import {
  ARTIST_LIST_FETCH_PENDING,
  ARTIST_LIST_FETCH_FULFILLED,
  ARTIST_LIST_FETCH_REJECTED,
  ARTIST_ITEM_FETCH_PENDING,
  ARTIST_ITEM_FETCH_FULFILLED,
  ARTIST_ITEM_FETCH_REJECTED,
  ARTIST_ITEMS_SWAP_PENDING,
  ARTIST_ITEMS_SWAP_FULFILLED,
  ARTIST_ITEMS_SWAP_REJECTED,
} from './Artist'

const DEFAULT_STATE = {
  current: {},
  items: [],
}

export default (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case ARTIST_ITEMS_SWAP_PENDING: {
      const [src, trg] = action.payload

      return {
        ...state,
        items: [...arrayMove(state.items, src.index, trg.index)],
      }
    }
    case ARTIST_LIST_FETCH_PENDING: {
      return {
        ...state,
        items: [],
      }
    }
    case ARTIST_ITEM_FETCH_PENDING: {
      return {
        ...state,
        current: {},
      }
    }
    case ARTIST_LIST_FETCH_FULFILLED: {
      return {
        ...state,
        items: action.payload.data
      }
    }
    case ARTIST_ITEM_FETCH_FULFILLED: {
      return {
        ...state,
        current: action.payload.data
      }
    }
    case ARTIST_ITEMS_SWAP_REJECTED:
    case ARTIST_LIST_FETCH_REJECTED:
    case ARTIST_ITEM_FETCH_REJECTED: {
      return {
        ...state,
        error: action.payload.response.data
      }
    }
    default:
      return state
  }
}