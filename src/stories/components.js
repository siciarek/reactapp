import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
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
} from '@storybook/addon-knobs'
import {Decorator} from './Decorator'

addDecorator(Decorator)
addDecorator(withKnobs)

// ------------------------------------------------------------------

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

import '../app/App.css'
import '../app/widgets/AppHeader.css'
import {
  Pager,
  AppHeader,
  AppSimpleList,
  AppSimpleItem,
  AppFloatingActionButton,
} from '../app/widgets'

import {
  AppDrawer,
  AppSpinner,
} from '../app/widgets/components'

storiesOf('Pager', module)
.add('with no params', () => <Pager/>)
.add('interactive', () => <Pager
    page={number('page', 1)}
    totalPages={number('totalPages', 1)}
    handleBack={action('Pager handle back')}
    handleNext={action('Pager handle next')}
  />)

storiesOf('AppSpinner', module)
.add('with no params (hidden)', withInfo()(() => <AppSpinner/>))
.add('with show param (interactive)', withInfo()(() => <AppSpinner show={boolean('show', true)}/>))

storiesOf('AppHeader', module)
.add('with no params',
  `This is test description.`,
  () => <AppHeader/>)
.add('with title', () => <AppHeader title={text('title', 'Zażółć gęślą jaźń!')}/>)

storiesOf('AppFloatingActionButton', module)
.add('with no params',
  `Only default param values are applied.`,
  () => <AppFloatingActionButton/>)
.add('with customized icon and action',
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
.add('with no params (closed)', () => <AppDrawer/>)
.add('opened and not authenticated', () => <AppDrawer opened={boolean('opened', true)}
                                                                       authenticated={boolean('authenticated', false)}
                                                                       toggleVisibility={action('toggleVisibility')}/>)
.add('opened and authenticated', () => <AppDrawer opened={boolean('opened', true)}
                                                                   authenticated={boolean('authenticated', true)}
                                                                   toggleVisibility={action('toggleVisibility')}/>)
storiesOf('AppSimpleList', module)
.add('with no params', () => <AppSimpleList/>)
.add('with items', () => <AppSimpleList items={items}/>)
.add('with items and title', () => <AppSimpleList title={text('title', 'The Beatles')} items={items}/>)
.add('with items, title and icon', () => {
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
.add('with items, title, icon and action', () => <AppSimpleList title={text('title', 'The Beatles')}
                                                                        icon={icons.stars} items={items}
                                                                        goto={action('goto')}/>)
storiesOf('AppSimpleItem', module)
.add('with no params', () => <AppSimpleItem/>)
.add('with description, info and returnRoute', () => <AppSimpleItem
  description={text('description', 'Lady Gaga')}
  info={text('info', 'Stefani Joanne Angelina Germanotta (born March 28, 1986), known professionally as Lady Gaga, is an American singer, songwriter, and actress. At the beginning of her career, Gaga became known for her unconventionality and provocative work. A popular contemporary recording artist, she is noted for constantly experimenting with new musical ideas and images.')}
  returnRoute={select('route', [null, '/artists'], null)}
/>)

