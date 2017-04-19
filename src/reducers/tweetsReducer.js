import {
  FETCH_TWEETS,
  FETCH_TWEETS_FULLFILLED,
  FETCH_TWEETS_REJECTED,
  ADD_TWEET,
  UPDATE_TWEET,
  DELETE_TWEET,
} from '../actions/actionTypes'

export default function reducer(state = {
  tweets: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case FETCH_TWEETS: {
      return {
        ...state,
        fetching: true
      }
    }
    case FETCH_TWEETS_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case FETCH_TWEETS_FULLFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        tweets: action.payload
      }
    }
    case ADD_TWEET: {
      return {
        ...state,
        tweets: [...state.tweets, action.payload]
      }
    }
    case UPDATE_TWEET: {
      const {id} = action.payload
      const items = [...state.tweets]
      const index = items.findIndex(item => item.id === id)
      items[index] = action.payload

      return {
        ...state,
        tweets: items
      }
    }
    case DELETE_TWEET: {
      return {
        ...state,
        tweets: state.tweets.filter(tweet => tweet.id !== action.payload)
      }
    }
    default:
      return state
  }
}