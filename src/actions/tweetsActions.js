import axios from 'axios'
import config from '../config'

import {FETCH_TWEETS_FULLFILLED, FETCH_TWEETS_REJECTED, ADD_TWEET, UPDATE_TWEET, DELETE_TWEET} from './actionTypes'

export const fetchTweets = () => {
  return (dispatch) => {
    axios.get(config.tweetsUrl)
    .then((response) => {
      dispatch({
        type: FETCH_TWEETS_FULLFILLED,
        payload: response.data.slice(0, 12), // fix zdalnych danych, tylko 12 pierwszych rekordów ma właściwą strukturę.
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_TWEETS_REJECTED, payload: err})
    })
  }
}

export const addTweet = (id, text) => {
  return {
    type: ADD_TWEET,
    payload: {
      id,
      text,
    },
  }
}

export const updateTweet = (id, text) => {
  return {
    type: UPDATE_TWEET,
    payload: {
      id,
      text,
    },
  }
}

export const deleteTweet = (id) => {
  return {
    type: DELETE_TWEET,
    payload: id,
  }
}
