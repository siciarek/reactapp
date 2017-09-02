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

import {SubmitButton, SelectGenderField} from '../app/widgets'
import {LoginForm} from '../user/components'
import {SignUpForm} from '../user/components'
import {GenreForm} from '../genre/components'
import {SongEditorForm} from '../song/components'
import {ProfileForm} from '../user/components'

storiesOf('Forms', module)

.add('SelectGenderField', () => <SelectGenderField
  label={text('label', SelectGenderField.defaultProps.label)}
  value={select('value', ['u', 'f', 'm'], SelectGenderField.defaultProps.value)}
  name={text('name', SelectGenderField.defaultProps.name)}
/>)

.add('SubmitButton - no params', () => <SubmitButton/>)
.add('SubmitButton - params (interactive)', () => <SubmitButton
  caption={text('caption', SubmitButton.defaultProps.caption)}
  color={select('color', ['primary', 'accent', 'default'], SubmitButton.defaultProps.color)}
  enabled={boolean('enabled', SubmitButton.defaultProps.enabled)}
/>)

.add('ProfileForm', () => <ProfileForm
  initialValues={{
    gender: 'm',
    firstName: 'Chuck',
    lastName: 'Norris',
    email: 'gmail@chucknorris.com',
    description: 'American martial artist, actor and film producer',
    info: `Norris appeared in a number of action films, such as Way of the Dragon,
in which he starred alongside Bruce Lee, and was
The Cannon Group's leading star in the 1980s.

He played the starring role in the television series Walker,
Texas Ranger from 1993 until 2001.

Norris is a devout Christian and politically conservative.
He has written several books on Christianity and donated to a number of Republican candidates and causes. In 2007 and 2008, he campaigned for former Arkansas Governor Mike Huckabee, who was running for the Republican nomination for president in 2008.[5] Norris also writes a column for the conservative website WorldNetDaily.[6] Since 2005 Norris has been widely associated with an internet meme which documents fictional and often absurd feats associated with him.
    `,
  }}
  onSubmit={action('ProfileForm submited')}/>)

.add('LoginForm', () => <LoginForm onSubmit={action('onSubmit')}/>)
.add('LoginForm with inital values', () => <LoginForm
  onSubmit={action('LoginForm.onSubmit')}
  initialValues={{
    username: 'colak',
    password: 'helloworld'
  }}/>)

.add('SignUpForm', () => <SignUpForm onSubmit={action('SongEditorForm.onSubmit')}/>)

.add('GenreForm', () => <GenreForm onSubmit={action('SongEditorForm.onSubmit')}/>)

.add('SongEditorForm', () => <SongEditorForm onSubmit={action('SongEditorForm.onSubmit')}/>)
