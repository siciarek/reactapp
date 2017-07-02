import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import {Provider} from 'react-redux'
import store from '../app/store'


import '../app/components/AppHeader.css'
import {AppHeader} from '../app/components'

storiesOf('AppHeader', module)
.add('With no params', () => <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    <AppHeader/>
  </MuiThemeProvider>
)
.add('With title', () => <Provider store={store}>
  <AppHeader title="Zażółć gęślą jaźń!"/>
</Provider>
)

