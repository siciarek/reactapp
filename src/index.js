import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'

import store from './app/store'
import routes from './app/routes'

ReactDom.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
)