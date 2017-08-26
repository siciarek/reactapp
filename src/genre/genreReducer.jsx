import {
  GENRE_LIST_FETCH,
  GENRE_LIST_FETCH_PENDING,
  GENRE_LIST_FETCH_FULFILLED,
  GENRE_LIST_FETCH_REJECTED,
  GENRE_ITEM_FETCH,
  GENRE_ITEM_FETCH_FULFILLED,
  GENRE_ITEM_FETCH_REJECTED,
  GENRE_ITEM_ADD,
  GENRE_ITEM_ADD_FULFILLED,
  GENRE_ITEM_ADD_REJECTED,
  GENRE_ITEM_SAVE,
  GENRE_ITEM_SAVE_FULFILLED,
  GENRE_ITEM_SAVE_REJECTED,
  GENRE_ITEM_UPDATE,
  GENRE_ITEM_REMOVE,
  GENRE_ITEM_REMOVE_FULFILLED,
  GENRE_ITEM_REMOVE_REJECTED,
} from './Genre'

const DEFAULT_STATE = {
  current: {
    id: null,
    name: null,
    description: null,
    info: null,
    category: {
      id: null,
      name: 'Unknown',
    }
  },
  meta: {},
  items: [],
  itemsEnabled: [],
}

export default (state = DEFAULT_STATE, action) => {

  switch (action.type) {

    case GENRE_ITEM_ADD_FULFILLED:
    case GENRE_ITEM_SAVE_FULFILLED: {
      return {
        ...state,
        items: action.payload,
        message: 'Operation succeed.',
      }
    }
    case GENRE_ITEM_REMOVE: {
      return {
        ...state,
        fetching: true,
      }
    }
    case GENRE_ITEM_REMOVE_FULFILLED: {
      return {
        ...state,
      }
    }

    case GENRE_LIST_FETCH: {
      return {
        ...state,
        items: [],
      }
    }
    case GENRE_ITEM_FETCH: {
      return {
        ...state,
        current: {},
      }
    }
    case GENRE_LIST_FETCH_FULFILLED: {

      const resp = action.payload
      const items = resp.data
      const meta = JSON.parse(resp.headers['x-meta-data'])

      return {
        ...state,
        meta,
        items,
      }
    }
    case GENRE_ITEM_FETCH_FULFILLED: {
      const current = action.payload === null
        ? DEFAULT_STATE.current
        : action.payload
      return {
        ...state,
        current: {...current}
      }
    }
    case GENRE_LIST_FETCH_REJECTED:
    case GENRE_ITEM_ADD_REJECTED:
    case GENRE_ITEM_REMOVE_REJECTED:
    case GENRE_ITEM_FETCH_REJECTED:
    case GENRE_ITEM_SAVE_REJECTED: {

    return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state
  }
}