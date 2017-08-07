import reducer from './userReducer'
import {
  USER_DEFAULT_STATE,
  USER_PROFILE_FETCH_FULFILLED,
} from './User'

test('userReducer USER_UPDATE action', () => {

  const payload = {
    id: 1,
    gender: 'male',
    firstName: 'Czesław',
    lastName: 'Olak',
    username: 'colak',
    email: 'colak@gmail.com',
    level: 24,
  }

  const previousState = {...USER_DEFAULT_STATE}

  const nextState = {
    ...previousState,
    ...payload,
  }

  const action = {
    type: USER_PROFILE_FETCH_FULFILLED,
    payload: payload
  }

  const state = reducer(previousState, action)
  expect(state).toEqual(nextState)
})
