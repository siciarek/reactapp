import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import {browserHistory as router} from 'react-router'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import '../app/App.css'
import '../app/components/AppHeader.css'
import '../app/components/AppFloatingActionButton.css'
import {AppHeader} from '../app/components'
import AppDrawerComponent from '../app/components/AppDrawerComponent'

storiesOf('AppHeader', module)
.add('with no params', () => <AppHeader/>)
.add('with title', () => <AppHeader title="Zażółć gęślą jaźń!"/>)

storiesOf('AppDrawerComponent', module)
.add('with no params (closed)', () =>
  <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    <AppDrawerComponent/>
  </MuiThemeProvider>
)
.add('opened and not authenticated', () =>
  <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    <AppDrawerComponent opened={true}/>
  </MuiThemeProvider>
)
.add('opened and authenticated', () =>
  <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    <AppDrawerComponent opened={true} authenticated={true}/>
  </MuiThemeProvider>
)
