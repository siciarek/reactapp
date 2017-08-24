import {
  USER_DEFAULT_STATE,
  USER_PROFILE_FETCH_FULFILLED,
  USER_UNAUTH_FULFILLED,
} from './User'

export default (state = USER_DEFAULT_STATE, action) => {

  switch (action.type) {

    case USER_PROFILE_FETCH_FULFILLED:
      return {
        ...state,
        ...action.payload,
      }
    case USER_UNAUTH_FULFILLED:
      return {
        ...USER_DEFAULT_STATE,
      }
    default:
      return state
  }
}