import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from './reducers'
import config, { ENV_PROD } from '../config'

const logger = config.env !== ENV_PROD ? createLogger() : null;
let middleware = logger === null ? applyMiddleware(promise(), thunk) : applyMiddleware(promise(), thunk, logger)

export default createStore(reducer, middleware)
