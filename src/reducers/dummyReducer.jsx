import {CHANGE_DUMMY} from '../actions/types'

const dummyReducer = (state = 'BASIC_DUMMY', action) => {
  switch (action.type) {
    case CHANGE_DUMMY:
      return action.text
    default:
      return state
  }
}

export default dummyReducer