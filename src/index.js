import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory as routerHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import store from './app/store'
import routes from './app/routes'

ReactDom.render(
  <Provider store={store}>
    <Router history={syncHistoryWithStore(routerHistory, store)} routes={routes}/>
  </Provider>,
  document.getElementById('root')
)
