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

storiesOf('Dialogs', module)
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
