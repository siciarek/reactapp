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
import { withInfo } from '@storybook/addon-info';

import {Decorator} from './Decorator'

addDecorator(Decorator)
addDecorator(withKnobs)

// ------------------------------------------------------------------

import ConfirmationDialog from '../app/widgets/dialogs/Confirmation'
import AppNotification from '../app/widgets/components/AppNotification'


storiesOf('Dialogs and notifications', module)
.add('Notification - no params', withInfo()(() => <AppNotification/>))
.add('Notification - interactive', () => {
  return <AppNotification
    notification={{
      code: select('code', [
        null,
        200,
        401,
        500
      ], 200),
      message: select('message', [
        null,
        'Operation succeed',
        'Bad credentials',
        'A little bit longer notification message with an exclamation mark! A little bit longer notification message with an exclamation mark!'
      ], 'Operation succeed')}}
    notificationType={select('notificationType',
      [
        null,
        'notification',
        'error'
      ], 'notification')}
    hide={action('hide notification')}
  />
})
.add('Confirmation - no params', () => <ConfirmationDialog/>)
.add('Confirmation - default params no actions handling', () => {
    const opened = boolean('opened', true)

    return <ConfirmationDialog
      open={opened}
      title={text('title', ConfirmationDialog.defaultProps.title)}
      message={text('message', ConfirmationDialog.defaultProps.message)}
    />
  }
)
.add('Confirmation - default params, actions handling', () => {
    const opened = boolean('opened', true)

    return <ConfirmationDialog
      open={opened}
      title={text('title', ConfirmationDialog.defaultProps.title)}
      message={text('message', ConfirmationDialog.defaultProps.message)}
      actionNo={action('User clicked NO')}
      actionYes={action('User clicked YES')}
    />
  }
)
