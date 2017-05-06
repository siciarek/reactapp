import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware()

import reducer from './reducers'
import config, {ENV_PROD} from './config'


const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options if needed
})

const middleware = applyMiddleware(promise(), thunk, sagaMiddleware)

const store = config.env !== ENV_PROD
  ? createStore(reducer, composeEnhancers(middleware))
  : createStore(reducer, middleware)

sagaMiddleware.run(rootSaga)

export default store