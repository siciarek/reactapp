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

import {SubmitButton, SelectGenderField} from '../app/widgets'
import {LoginForm} from '../user/components'
import {SignUpForm} from '../user/components'
import {GenreForm} from '../genre/components'
import {SongEditorForm} from '../song/components'
import {ProfileForm} from '../user/components'

storiesOf('Forms', module)

.addWithInfo('SelectGenderField', () => <SelectGenderField
  label={text('label', SelectGenderField.defaultProps.label)}
  value={select('value', ['u', 'f', 'm'], SelectGenderField.defaultProps.value)}
  name={text('name', SelectGenderField.defaultProps.name)}
/>)

.addWithInfo('SubmitButton - no params', () => <SubmitButton/>)
.addWithInfo('SubmitButton - params (interactive)', () => <SubmitButton
  caption={text('caption', SubmitButton.defaultProps.caption)}
  color={select('color', ['primary', 'accent', 'default'], SubmitButton.defaultProps.color)}
  enabled={boolean('enabled', SubmitButton.defaultProps.enabled)}
/>)

.addWithInfo('ProfileForm', () => <ProfileForm onSubmit={action('ProfileForm submited')}/>)

.addWithInfo('LoginForm', () => <LoginForm onSubmit={action('onSubmit')}/>)
.addWithInfo('LoginForm with inital values', () => <LoginForm
  onSubmit={action('LoginForm.onSubmit')}
  initialValues={{
    username: 'colak',
    password: 'helloworld'
  }}/>)

.addWithInfo('SignUpForm', () => <SignUpForm onSubmit={action('SongEditorForm.onSubmit')}/>)

.addWithInfo('GenreForm', () => <GenreForm onSubmit={action('SongEditorForm.onSubmit')}/>)

.addWithInfo('SongEditorForm', () => <SongEditorForm onSubmit={action('SongEditorForm.onSubmit')}/>)
