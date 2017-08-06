import React from 'react'
import {TextField, Button} from 'material-ui'

// http://redux-form.com/7.0.3/examples/material-ui/

const renderTextField = props => {
  const {label, input, meta, ...custom} = props
  return <TextField label={label} {...input} {...custom}/>
}

const renderSubmitButton = (caption = 'Submit') => <Button raised type="submit" color="primary">{caption}</Button>

export {renderTextField, renderSubmitButton}