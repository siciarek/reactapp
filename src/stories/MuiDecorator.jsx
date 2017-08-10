import React from 'react';
import {Provider} from 'react-redux'
import store from '../app/store'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
export const MuiDecorator = (storyFn) =>
  <Provider store={store}>
    <MuiThemeProvider theme={createMuiTheme({})}>
      <div>
        {storyFn()}
      </div>
    </MuiThemeProvider>
  </Provider>
