import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import config from './config';
import reducer from './reducers'

export const ENV_DEV = 'dev'
export const ENV_TEST = 'test'
export const ENV_PROD =  'prod'

const logger = config.env !== ENV_PROD ? createLogger() : null;
let middleware = logger === null ? applyMiddleware(promise(), thunk) : applyMiddleware(promise(), thunk, logger)

export default createStore(reducer, middleware)
