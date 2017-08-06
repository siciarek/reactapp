import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {renderTextField, renderSubmitButton} from '../../utils/formHelper'

const LoginForm = ({handleSubmit, pristine, reset, submitting}) => {

  return <form onSubmit={handleSubmit}>
    <div>
      <Field name="username" label="Username" component={renderTextField}/>
    </div>
    <div>
      <Field name="password" label="Password" component={renderTextField}/>
    </div>
    <br/>
    <div>
      {renderSubmitButton()}
    </div>
  </form>
}

export default reduxForm({
  form:'loginForm'
})(LoginForm)