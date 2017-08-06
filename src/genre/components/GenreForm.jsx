import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {renderTextField, renderSubmitButton} from '../../utils/formHelper'

let GenreForm = ({handleSubmit, pristine, reset, submitting}) => {

  return <form onSubmit={handleSubmit}>
    <div>
      <Field name="id" label="Id" component={renderTextField}/>
    </div>
    <div>
      <Field name="category" label="Category" component={renderTextField}/>
    </div>
    <div>
      <Field name="name" label="Name" component={renderTextField}/>
    </div>
    <div>
      <Field name="description" label="Description" component={renderTextField}/>
    </div>
    <div>
      <Field name="info" label="Info" component={renderTextField} multiline={true} rowsMax={8}/>
    </div>

    <br/>
    <div>
      {renderSubmitButton()}
    </div>
  </form>
}

export default reduxForm({
  form: 'genreForm',
})(GenreForm)
