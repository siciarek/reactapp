// import * as user from '../userActions'
// user.setUserName('Jon')

export const fetchUser = () => {
  return {
    type: 'FETCH_USER_FULLFILLED',
    payload: {
      name: 'Will',
      age: 35,
    }
  }
}

export const setUserName = (name) => {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}

export const setUserAge = (age) => {
  return {
    type: 'SET_USER_AGE',
    payload: age,
  }
}
