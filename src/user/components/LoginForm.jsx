import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {renderTextField, SubmitButton} from '../../utils/formHelpers'
import {required, email, password} from '../../utils/formValidators'
import {Paper, Typography} from 'material-ui'

const LoginForm = ({handleSubmit, submitting, valid}) => {

  return <form onSubmit={handleSubmit}>
    <div>
      <Field name="username" label="E-mail" validate={[required, email]} component={renderTextField}/>
    </div>
    <div>
      <Field name="password" type="password" label="Password" validate={[required, password]}
             component={renderTextField}/>
    </div>
    <br/>
    <div>
      <SubmitButton enabled={!submitting && valid}/>
    </div>
  </form>
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm)