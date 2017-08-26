import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {renderTextField, renderSwitch, renderGenderField, SubmitButton} from '../../utils/formHelpers'
import {required, email, minLength3, maxLength32} from '../../utils/formValidators'

const ProfileForm = ({handleSubmit}) => {

  return <form onSubmit={handleSubmit}>
    <div>
      <Field name="profileVisibleToThePublic" label="Profile visible to the public" component={renderSwitch}/>
    </div>
    <div>
      <Field name="gender" label="Gender" component={renderGenderField}/>
    </div>
    <div>
      <Field name="firstName" label="First name" validate={[required, minLength3, maxLength32]}
             component={renderTextField}/>
    </div>
    <div>
      <Field name="lastName" label="Last name" validate={[required, minLength3, maxLength32]}
             component={renderTextField}/>
    </div>
    <div>
      <Field name="email" label="E-mail" validate={[required, email]} component={renderTextField}/>
    </div>
    <div>
      <Field name="description" label="Description" component={renderTextField}/>
    </div>
    <div>
      <Field name="info" label="Info" rowsMax={8} multiline={true} component={renderTextField}/>
    </div>
    <br/>
    <div>
      <SubmitButton/>
    </div>
  </form>
}

export default reduxForm({form: 'profileForm'})(ProfileForm)
