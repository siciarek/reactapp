import React from 'react'
import PropTypes from 'prop-types'
import {TextField, Button} from 'material-ui'

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

const SubmitButton = ({caption, color, enabled}) => <Button
    raised
    disabled={enabled === false}
    color={color}
    type="submit"
  >{caption}</Button>

SubmitButton.propTypes = {
  caption: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
}

SubmitButton.defaultProps = {
  caption: 'Submit',
  color: 'primary',
  enabled: true,
}

export {renderTextField, SubmitButton}