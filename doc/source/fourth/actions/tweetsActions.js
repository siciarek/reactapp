import axios from 'axios'

export const fetchTweets = () => {
  return (dispatch) => {
    axios.get('http://rest.learncode.academy/api/test123/tweets')
    .then((response) => {
      dispatch({
        type: 'FETCH_TWEETS_FULLFILLED',
        payload: response.data.slice(0, 12), // fix zdalnych danych, tylko 12 pierwszych rekordów ma właściwą strukturę.
      })
    })
    .catch((err) => {
       dispatch({type: 'FETCH_TWEETS_REJECTED', payload: err})
    })
  }
}

export const addTweet = (id, text) => {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export const updateTweet = (id, text) => {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}
