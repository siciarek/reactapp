import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware()

import reducer from './reducers'
import config, { ENV_PROD } from './config'

const logger = config.env !== ENV_PROD ? createLogger() : null;

let middleware = logger === null
  ? applyMiddleware(promise(), thunk, sagaMiddleware)
  : applyMiddleware(promise(), thunk, sagaMiddleware, logger)


const store = createStore(reducer, middleware)

sagaMiddleware.run(rootSaga)

export default store