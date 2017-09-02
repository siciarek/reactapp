import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
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

import {
  SystemPage,
  PageNotFound,
  AccessForbiden,
  Blank,
} from '../app/pages'

storiesOf('System pages', module)
.add('SystemPage', 'System pages basic class.', () => <SystemPage
  code={number('code', 200)}
  message={text('message', 'OK')}
  icon={select('icon', ['thumb_up', 'error_outline', 'pan_tool'], 'thumb_up')}
/>)
.add('Blank', 'Blank page, sometimes is helpful.', () => <Blank/>)
.add('404 Page not found', () => <PageNotFound/>)
.add('403 Access forbiden.', () => <AccessForbiden/>)
