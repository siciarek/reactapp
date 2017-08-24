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

import ConfirmationDialog from '../app/components/dialogs/Confirmation'
import AppNotification from '../app/components/components/AppNotification'


storiesOf('Dialogs and notifications', module)
.addWithInfo('Notification - no params', () => <AppNotification/>)
.addWithInfo('Notification - interactive', () => {
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
.addWithInfo('Confirmation - no params', () => <ConfirmationDialog/>)
.addWithInfo('Confirmation - default params no actions handling', () => {
    const opened = boolean('opened', true)

    return <ConfirmationDialog
      open={opened}
      title={text('title', ConfirmationDialog.defaultProps.title)}
      message={text('message', ConfirmationDialog.defaultProps.message)}
    />
  }
)
.addWithInfo('Confirmation - default params, actions handling', () => {
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
