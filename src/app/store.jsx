import {applyMiddleware, createStore} from 'redux'
// import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware()

import reducer from './reducers'
import config, { ENV_PROD } from './config'


/**
 * Sample middleware logger
 */
const simpleLogger = store => next => action => {
  console.log(action.type)

  // console.group(action.type)
  // console.info('dispatching', action)
  let result = next(action)
  // console.log('next state', store.getState())
  // console.groupEnd(action.type)

  return result
}

// const logger = config.env !== ENV_PROD ? createLogger() : null;
const logger = config.env !== ENV_PROD ? simpleLogger : null;

let middleware = logger === null
  ? applyMiddleware(promise(), thunk, sagaMiddleware)
  : applyMiddleware(promise(), thunk, sagaMiddleware, logger)


const store = createStore(reducer, middleware)

sagaMiddleware.run(rootSaga)

export default store