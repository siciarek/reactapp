import React from 'react'
import {TextField, Button} from 'material-ui'

// http://redux-form.com/7.0.3/examples/material-ui/

const renderTextField = props => {
  const {label, input, meta: {touched, error, warning}, ...custom} = props

  return <TextField
    autoComplete="off"
    helperText={touched && error || touched && warning}
    error={touched && error && error.length > 0}
    label={label}
    {...input}
    {...custom}
  />
}

const SubmitButton = ({caption = 'Submit', color = 'primary'}) => <Button raised type="submit" color={color}>{caption}</Button>

export {renderTextField, SubmitButton}