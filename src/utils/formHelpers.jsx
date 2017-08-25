import React from 'react'
import {TextField, RadioGroup} from 'material-ui'
import {SubmitButton, SelectGenderField} from '../app/widgets'

// http://redux-form.com/7.0.3/examples/material-ui/

const renderTextField = props => {
  const {label, input, meta: {touched, error, warning}, ...custom} = props


  return <TextField
    style={{marginTop: 8}}
    autoComplete="off"
    helperText={touched && error || touched && warning}
    error={touched && error && error.length > 0}
    label={label}

    {...input}
    {...custom}
  />
}

const renderSelectGenderField = props => {
  const {label, input, meta: {touched, error, warning}, ...custom} = props

  return <SelectGenderField {...input} {...custom}/>
}

export {renderTextField, renderSelectGenderField, SubmitButton}