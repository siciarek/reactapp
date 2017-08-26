import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {renderTextField, SubmitButton} from '../../utils/formHelpers'
import {required, email, minLength3, maxLength32} from '../../utils/formValidators'
import {SelectGenderField} from '../../app/widgets'
import {FormControlLabel, Switch} from 'material-ui'

const ProfileForm = ({handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="profileVisibleToThePublic" label="Profile visible to the public"
               component={({label, input}) => <FormControlLabel
                 label={label}
                 control={<Switch checked={input.value} onChange={(event, value) => input.onChange(value)}/>}
               />}/>
      </div>
      <div>
        <Field name="gender"
               component={({input, meta: {touched, error, warning}, ...custom}) => <SelectGenderField
                 onChange={(event, value) => input.onChange(value)} {...input} {...custom}
               />}/>
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
  )
}

export default reduxForm({form: 'profileForm'})(ProfileForm)
