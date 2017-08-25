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
import {Decorator} from './Decorator'

addDecorator(Decorator)
addDecorator(withKnobs)

// ------------------------------------------------------------------

import '../app/App.css'
import '../app/widgets/AppHeader.css'
import {
  AppHeader,
  AppSimpleList,
  AppSimpleItem,
  AppFloatingActionButton,
} from '../app/widgets'

import {
  AppDrawer,
  AppSpinner,
} from '../app/widgets/components'

import IconAdd from 'material-ui-icons/Add'
import IconCheck from 'material-ui-icons/Check'
import IconLockOpen from 'material-ui-icons/LockOpen'
import IconPerson from 'material-ui-icons/Person'
import IconDashboard from 'material-ui-icons/Dashboard'
import IconAccountCircle from 'material-ui-icons/AccountCircle'
import IconPowerSettingsNew from 'material-ui-icons/PowerSettingsNew'
import IconHome from 'material-ui-icons/Home'
import IconFace from 'material-ui-icons/Face'
import IconMic from 'material-ui-icons/Mic'
import IconStars from 'material-ui-icons/Stars'
import IconLibraryBooks from 'material-ui-icons/LibraryBooks'
import IconVolumeUp from 'material-ui-icons/VolumeUp'
import IconTheaters from 'material-ui-icons/Theaters'
import IconKeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft'
import IconErrorOutline from 'material-ui-icons/ErrorOutline'

const icons = {
  add: <IconAdd/>,
  keyboard_arrow_left: <IconKeyboardArrowLeft/>,
  check: <IconCheck/>,
  lock_open: <IconLockOpen/>,
  person: <IconPerson/>,
  dashboard: <IconDashboard/>,
  account_circle: <IconAccountCircle/>,
  power_settings_new: <IconPowerSettingsNew/>,
  home: <IconHome/>,
  face: <IconFace/>,
  mic: <IconMic/>,
  stars: <IconStars/>,
  library_books: <IconLibraryBooks/>,
  volume_up: <IconVolumeUp/>,
  theaters: <IconTheaters/>,
  error_outline: <IconErrorOutline/>
}

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

storiesOf('AppSpinner', module)
.addWithInfo('with no params (hidden)', () => <AppSpinner/>)
.addWithInfo('with show param (interactive)', () => <AppSpinner show={boolean('show', true)}/>)

storiesOf('AppHeader', module)
.addWithInfo('with no params',
  `This is test description.`,
  () => <AppHeader/>)
.addWithInfo('with title', () => <AppHeader title={text('title', 'Zażółć gęślą jaźń!')}/>)

storiesOf('AppFloatingActionButton', module)
.addWithInfo('with no params',
  `Only default param values are applied.`,
  () => <AppFloatingActionButton/>)
.addWithInfo('with customized icon and action',
  `Params can be customized.`,
  () => {
    const icon = icons[select('icon', [
      'add',
      'icon_keyboard_arrow_left',
      'home',
      'library_books',
      'theaters',
    ], 'home')]
    const color = select('color', ['primary', 'accent', 'default'], 'primary')

    return <AppFloatingActionButton icon={icon} color={color} action={action('Button pressed')}/>
  })

storiesOf('AppDrawer', module)
.addWithInfo('with no params (closed)', () => <AppDrawer/>)
.addWithInfo('opened and not authenticated', () => <AppDrawer opened={boolean('opened', true)}
                                                                       authenticated={boolean('authenticated', false)}
                                                                       toggleVisibility={action('toggleVisibility')}/>)
.addWithInfo('opened and authenticated', () => <AppDrawer opened={boolean('opened', true)}
                                                                   authenticated={boolean('authenticated', true)}
                                                                   toggleVisibility={action('toggleVisibility')}/>)
storiesOf('AppSimpleList', module)
.addWithInfo('with no params', () => <AppSimpleList/>)
.addWithInfo('with items', () => <AppSimpleList items={items}/>)
.addWithInfo('with items and title', () => <AppSimpleList title={text('title', 'The Beatles')} items={items}/>)
.addWithInfo('with items, title and icon', () => {
  const choice = select('icon', [
      'check',
      'lock_open',
      'person',
      'dashboard',
      'account_circle',
      'power_settings_new',
      'home',
      'face',
      'mic',
      'stars',
      'library_books',
      'volume_up',
      'theaters',
    ],
    'face')
  const icon = icons[choice]

  let _items = []
  try {
    _items = JSON.parse(text('items', JSON.stringify(items, null, 4)))
  }
  catch (e) {
    _items = items
  }

  return <AppSimpleList
    title={select('title', ['The Beatles', 'Rolling Stones', 'Led Zeppelin'], 'The Beatles')}
    icon={icon} items={_items}/>
})
.addWithInfo('with items, title, icon and action', () => <AppSimpleList title={text('title', 'The Beatles')}
                                                                        icon={icons.stars} items={items}
                                                                        goto={action('goto')}/>)
storiesOf('AppSimpleItem', module)
.addWithInfo('with no params', () => <AppSimpleItem/>)
.addWithInfo('with description, info and returnRoute', () => <AppSimpleItem
  description={text('description', 'Lady Gaga')}
  info={text('info', 'Stefani Joanne Angelina Germanotta (born March 28, 1986), known professionally as Lady Gaga, is an American singer, songwriter, and actress. At the beginning of her career, Gaga became known for her unconventionality and provocative work. A popular contemporary recording artist, she is noted for constantly experimenting with new musical ideas and images.')}
  returnRoute={select('route', [null, '/artists'], null)}
/>)

