import reducer from './userReducer';
import {
  USER_INITIAL_STATE,
  USER_UPDATE,
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

  const previousState = {...USER_INITIAL_STATE}

  const nextState = {
    ...previousState,
    ...payload,
  }

  const action = {
    type: USER_UPDATE,
    payload: payload
  }

  const state = reducer(previousState, action);
  expect(state).toEqual(nextState);
});
