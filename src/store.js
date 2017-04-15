import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import config from './config';
import reducer from './reducers'

const logger = config.env === 'dev' ? createLogger() : null;
let middleware = logger === null ? applyMiddleware(promise(), thunk) : applyMiddleware(promise(), thunk, logger)

export default createStore(reducer, middleware)
