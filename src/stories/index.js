import React from 'react';
import {storiesOf, action, linkTo, addDecorator} from '@kadira/storybook';
import {
  withKnobs,
  boolean,
  text,
  array,
  number,
  object,
  color,
  date,
  select,
} from '@kadira/storybook-addon-knobs'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import ListItemIcon from 'material-ui/svg-icons/action/stars'

import '../app/App.css'
import '../app/components/AppHeader.css'
import '../app/components/AppFloatingActionButton.css'
import {AppHeader, AppDrawerComponent, AppSimpleList} from '../app/components'

addDecorator(withKnobs)

storiesOf('AppHeader', module)
.add('with no params', () => <AppHeader/>)
.add('with title', () => <AppHeader title={text('title', 'Zażółć gęślą jaźń!')}/>)

storiesOf('AppDrawerComponent', module)
.add('with no params (closed)', () =>
  <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    <AppDrawerComponent/>
  </MuiThemeProvider>
)
.add('opened and not authenticated', () =>
  <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    <AppDrawerComponent opened={boolean('opened', true)} authenticated={boolean('authenticated', false)} toggleVisibility={action('toggleVisibility')}/>
  </MuiThemeProvider>
)
.add('opened and authenticated', () =>
  <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    <AppDrawerComponent opened={boolean('opened', true)} authenticated={boolean('authenticated', true)}
                        toggleVisibility={action('toggleVisibility')}/>
  </MuiThemeProvider>
)

const items = [
  {
    id: 1,
    description: 'John Lennon',
  },
  {
    id: 2,
    description: 'Paul McCartney',
  },
  {
    id: 3,
    description: 'George Harrison',
  },
  {
    id: 4,
    description: 'Ringo Starr',
  },
]

storiesOf('AppSimpleList', module)
.add('with no params', () => <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    <AppSimpleList/>
  </MuiThemeProvider>
)
.add('with items', () => <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    <AppSimpleList items={items}/>
  </MuiThemeProvider>
)
.add('with items and title', () => <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    <AppSimpleList title={text('title', 'The Beatles')} items={items}/>
  </MuiThemeProvider>
)
.add('with items, title and icon', () => <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    <AppSimpleList title={select('title', ['The Beatles', 'Rolling Stones', 'Led Zeppelin'], 'The Beatles')} icon={<ListItemIcon/>} items={items}/>
  </MuiThemeProvider>
)
.add('with items, title, icon and action', () => <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    <AppSimpleList title={text('title', 'The Beatles')} icon={<ListItemIcon/>} items={items} goTo={action('goTo')}/>
  </MuiThemeProvider>
)