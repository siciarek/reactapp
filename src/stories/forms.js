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
import GenreForm from '../genre/components/GenreForm'
import SongEditorForm from '../song/SongEditorForm'

storiesOf('Forms', module)
.addWithInfo('SubmitButton - no params', () => <SubmitButton/>)
.addWithInfo('SubmitButton - params (interactive)', () => <SubmitButton
  caption={text('caption', SubmitButton.defaultProps.caption)}
  color={select('color', ['primary', 'accent', 'default'], SubmitButton.defaultProps.color)}
  enabled={boolean('enabled', SubmitButton.defaultProps.enabled)}
/>)

.addWithInfo('LoginForm', () => <LoginForm onSubmit={action('onSubmit')}/>)
.addWithInfo('LoginForm with inital values', () => <LoginForm onSubmit={action('LoginForm.onSubmit')}
                                                                            initialValues={{
                                                                              username: 'colak',
                                                                              password: 'helloworld'
                                                                            }}/>)

.addWithInfo('SignUpForm', () => <SignUpForm onSubmit={action('SongEditorForm.onSubmit')}/>)

.addWithInfo('GenreForm', () => <GenreForm onSubmit={action('SongEditorForm.onSubmit')}/>)

.addWithInfo('SongEditorForm', () => <SongEditorForm onSubmit={action('SongEditorForm.onSubmit')}/>)
