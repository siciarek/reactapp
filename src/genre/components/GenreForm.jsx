import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {renderTextField, SubmitButton} from '../../utils/formHelpers'
import {required, maxLength127, maxLength255, integer} from '../../utils/formValidators'

const GenreForm = ({handleSubmit, pristine, reset, submitting}) =>
  <form onSubmit={handleSubmit}>
    <div>
      <Field name="category" label="Category" validate={[required, integer]} component={renderTextField}/>
    </div>
    <div>
      <Field name="name" label="Name" validate={[required, maxLength127]} component={renderTextField}/>
    </div>
    <div>
      <Field name="description" label="Description" validate={[required, maxLength255]} component={renderTextField}/>
    </div>
    <div>
      <Field name="info" label="Info" validate={[maxLength127]} component={renderTextField} multiline={true}
             rowsMax={8}/>
    </div>
    <br/>
    <div>
      <SubmitButton/>
    </div>
  </form>

export default reduxForm({form: 'genreForm'})(GenreForm)
