import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {renderTextField, SubmitButton} from '../../utils/formHelpers'
import {required} from '../../utils/formValidators'

const LoginForm = ({handleSubmit, submitting, valid}) =>
  <form onSubmit={handleSubmit}>
    <div>
      <Field name="username" label="E-mail" validate={required} component={renderTextField}/>
    </div>
    <div>
      <Field name="password" label="Password" validate={required} component={renderTextField} type="password"/>
    </div>
    <br/>
    <div>
      <SubmitButton enabled={!submitting && valid}/>
    </div>
  </form>

export default reduxForm({form: 'loginForm'})(LoginForm)