import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {renderTextField, SubmitButton} from '../../utils/formHelpers'

const LoginForm = ({handleSubmit, pristine, reset, submitting}) => {

  return <form onSubmit={handleSubmit}>
    <div>
      <Field name="username" label="Username" component={renderTextField}/>
    </div>
    <div>
      <Field name="password" type="password" label="Password" component={renderTextField}/>
    </div>
    <br/>
    <div>
      <SubmitButton/>
    </div>
  </form>
}

export default reduxForm({
  form:'loginForm'
})(LoginForm)