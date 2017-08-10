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

import {SubmitButton} from '../utils/formHelpers'
import LoginForm from '../user/components/LoginForm'
import SignUpForm from '../user/components/SignUpForm'

storiesOf('Forms', module)
.addWithInfo('SubmitButton - no params', () => <SubmitButton />)
.addWithInfo('SubmitButton - params (interactive)', () => <SubmitButton
  caption={text('caption', SubmitButton.defaultProps.caption)}
  color={select('color', ['primary', 'accent', 'default'], SubmitButton.defaultProps.color)}
  enabled={boolean('enabled', SubmitButton.defaultProps.enabled)}
/>)

.addWithInfo('User LoginForm - onSubimt action', () => <LoginForm onSubmit={action('onSubmit')} />)
.addWithInfo('User LoginForm - default values onSubmit action', () => <LoginForm onSubmit={action('onSubmit')}
                                                                                 initialValues={{
                                                                                   username: 'colak',
                                                                                   password: 'helloworld'
                                                                                 }}/>)

.addWithInfo('User SignUpForm - onSubimt action', () => <SignUpForm onSubmit={action('onSubmit')} />)
