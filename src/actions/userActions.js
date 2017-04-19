import axios from 'axios'
import config from '../config'

import {
  FETCH_USERS_FULLFILLED,
  FETCH_USERS_REJECTED,
  FETCH_USER,
  UPDATE_USER,
  FETCH_USER_FULLFILLED,
  FETCH_USER_REJECTED,
  SET_USER_NAME,
  SET_USER_AGE
} from './actionTypes'

export const fetchUser = () => {

  return (dispatch) => {

    axios.get(config.userUrl)
    .then((response) => {
      dispatch({
        type: FETCH_USER_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_USER_REJECTED, payload: err})
    })
  }
}

export const fetchUsers = () => {

  return (dispatch) => {
    dispatch({type: FETCH_USER})

    axios.get(config.usersUrl)
    .then((response) => {
      dispatch({
        type: FETCH_USERS_FULLFILLED,
        payload: response.data,
      })
    })
    .catch((err) => {
      dispatch({type: FETCH_USERS_REJECTED, payload: err})
    })
  }
}

export const updateUser = (id, name) => {
  return {
    type: UPDATE_USER,
    payload: {
      id,
      name,
    },
  }
}

export const setUserName = (name) => {
  return {
    type: SET_USER_NAME,
    payload: name,
  }
}

export const setUserAge = (age) => {
  return {
    type: SET_USER_AGE,
    payload: age,
  }
}
