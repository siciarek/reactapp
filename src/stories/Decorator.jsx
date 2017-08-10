import React from 'react';
import {Provider} from 'react-redux'
import store from '../app/store'

export const Decorator = (storyFn) =>
  <Provider store={store}>
    <div>
      {storyFn()}
    </div>
  </Provider>
