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
const MuiDecorator = (storyFn) => <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
  {storyFn()}
</MuiThemeProvider>

import ListItemIcon from 'material-ui/svg-icons/action/stars'

import '../app/App.css'
import '../app/components/AppHeader.css'
import '../app/components/AppFloatingActionButton.css'
import {AppHeader, AppDrawerComponent, AppSimpleList} from '../app/components'

addDecorator(withKnobs)
addDecorator(MuiDecorator)

storiesOf('AppHeader', module)
.addWithInfo('with no params',
  `This is test description.`,
  () => <AppHeader/>)
.addWithInfo('with title', () => <AppHeader title={text('title', 'Zażółć gęślą jaźń!')}/>)

storiesOf('AppDrawerComponent', module)
.addWithInfo('with no params (closed)', () => <AppDrawerComponent/>)
.addWithInfo('opened and not authenticated', () => <AppDrawerComponent opened={boolean('opened', true)}
                                                                       authenticated={boolean('authenticated', false)}
                                                                       toggleVisibility={action('toggleVisibility')}/>)
.addWithInfo('opened and authenticated', () => <AppDrawerComponent opened={boolean('opened', true)}
                                                                   authenticated={boolean('authenticated', true)}
                                                                   toggleVisibility={action('toggleVisibility')}/>)
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
.addWithInfo('with no params', () => <AppSimpleList/>)
.addWithInfo('with items', () => <AppSimpleList items={items}/>)
.addWithInfo('with items and title', () => <AppSimpleList title={text('title', 'The Beatles')} items={items}/>)
.addWithInfo('with items, title and icon', () => <AppSimpleList
  title={select('title', ['The Beatles', 'Rolling Stones', 'Led Zeppelin'], 'The Beatles')}
  icon={<ListItemIcon/>} items={items}/>)
.addWithInfo('with items, title, icon and action', () => <AppSimpleList title={text('title', 'The Beatles')}
                                                                        icon={<ListItemIcon/>} items={items}
                                                                        goTo={action('goTo')}/>)