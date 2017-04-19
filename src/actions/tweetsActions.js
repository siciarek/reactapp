import axios from 'axios'
import config from '../config'

import {FETCH_TWEETS_FULLFILLED, FETCH_TWEETS_REJECTED, ADD_TWEET, UPDATE_TWEET, DELETE_TWEET} from './actionTypes'

export const fetchTweets = () => {
  return (dispatch) => {
    axios.get(config.tweetsUrl)
    .then((response) => {
      dispatch({
        type: FETCH_TWEETS_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: FETCH_TWEETS_REJECTED,
        payload: err
      })
    })
  }
}

export const addTweet = (id, title) => {
  return {
    type: ADD_TWEET,
    payload: {
      id,
      title,
    },
  }
}

export const updateTweet = (id, title) => {
  return {
    type: UPDATE_TWEET,
    payload: {
      id,
      title,
    },
  }
}

export const deleteTweet = (id) => {
  return {
    type: DELETE_TWEET,
    payload: id,
  }
}
