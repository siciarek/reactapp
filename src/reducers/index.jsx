import { combineReducers } from 'redux'

import todos from './todos'
import visibilityFilter from './visibilityFilter'
import dummyReducer from './dummyReducer'

const todoApp = combineReducers({
  dummyReducer,
  todos,
  visibilityFilter
})

export default todoApp