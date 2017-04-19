import {
  FETCH_USERS,
  FETCH_USERS_FULLFILLED,
  FETCH_USERS_REJECTED,
  FETCH_USER,
  UPDATE_USER,
  FETCH_USER_FULLFILLED,
  FETCH_USER_REJECTED,
} from '../actions/actionTypes'

export default function reducer(state = {
  user: {
    id: null,
    name: null,
    age: null,
  },
  users: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case FETCH_USERS: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_USERS_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case FETCH_USERS_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      }
    }
    case FETCH_USER: {
      return {
        ...state,
        fetching: true
      }
    }
    case UPDATE_USER: {
      const {id} = action.payload
      const items = [...state.users]
      const index = items.findIndex(users => users.id === id)
      items[index] = action.payload

      return {
        ...state,
        users: items
      }
    }
    case FETCH_USER_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case FETCH_USER_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload
      }
    }
    default:
      return state
  }
}