import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {TextField, Button} from 'material-ui'

// http://redux-form.com/7.0.3/examples/material-ui/

const renderTextField = props => {
  const {label, input, meta, ...custom} = props
  return <TextField label={label} {...input} {...custom}/>
}

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
      <Button raised type="submit" color="primary">Submit</Button>
    </div>
  </form>
}

export default reduxForm({
  form: 'genreForm',
})(GenreForm)
