import {FETCH_USER_FULLFILLED, SET_USER_NAME, SET_USER_AGE} from './actionTypes'

export const fetchUser = () => {
  return {
    type: FETCH_USER_FULLFILLED,
    payload: {
      id: 1,
      name: 'Will',
      age: 35,
    }
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
