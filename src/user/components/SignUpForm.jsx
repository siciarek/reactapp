import React from 'react'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'
import {renderTextField, SubmitButton} from '../../utils/formHelpers'
import {required, email, password} from '../../utils/formValidators'

const SignUpForm = (props) => {

  const {handleSubmit, pristine, reset, submitting, valid, anyTouch} = props

  return <form onSubmit={handleSubmit}>
    <div>
      <Field name="email" label="E-mail" validate={[required, email]} component={renderTextField}/>
    </div>
    <div>
      <Field name="password" label="Password" validate={[required, password]} component={renderTextField} type="password"/>
    </div>
    <div>
      <Field name="passwordConfirmation" label="Retype password" validate={[required]} component={renderTextField} type="password"/>
    </div>
    <br/>
    <div>
      <SubmitButton enabled={!submitting && valid}/>
    </div>
  </form>
}

const validate = values => {
  const errors = {}

  if(values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Retyped password is different'
  }

  return errors
}

export default reduxForm({
  form:'signUpForm',
  validate,
})(SignUpForm)