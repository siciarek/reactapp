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

import {
  SystemPage,
  PageNotFound,
  AccessForbiden,
  Blank,
} from '../app/pages'

storiesOf('System pages', module)
.addWithInfo('SystemPage', 'System pages basic class.', () => <SystemPage
  code={number('code', 200)}
  message={text('message', 'OK')}
  icon={select('icon', ['thumb_up', 'error_outline', 'pan_tool'], 'thumb_up')}
/>)
.addWithInfo('Blank', 'Blank page, sometimes is helpful.', () => <Blank/>)
.addWithInfo('404 Page not found', () => <PageNotFound/>)
.addWithInfo('403 Access forbiden.', () => <AccessForbiden/>)
