import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel, Checkbox} from 'material-ui'
import {AppSpinner, AppHeader} from '../app/components'
import {debounce} from 'lodash'
import YTSearch from 'youtube-api-search'
import {reduxForm, Field} from 'redux-form'
import {createPost} from './TestActions'

/*
[
    {
        "name": "title",
        "value": ""
    },
    {
        "active": false,
        "asyncValidating": false,
        "autofilled": false,
        "dirty": false,
        "error": "Title is required.",
        "form": "DummyForm",
        "invalid": true,
        "pristine": true,
        "submitting": false,
        "submitFailed": false,
        "touched": false,
        "valid": false,
        "visited": false
    }
]
 */

const req = (val) => {
  const errors = {};

  console.log('OK')

  // if(val.length === 0) {
    errors['title'] = 'Required.'
  // }

  return errors
}

class TestDummy extends React.Component {

  createField = (props) => {

    const {input, meta, type, label} = props

    return (
      <div>
        <label>{label}</label>
        <br/>
        <input type={type} name={input.name}/>
      </div>
    )
  }

  showResult(data) {
    console.log(data)
  }

  render() {

    const {handleSubmit} = this.props


    return (
      <form onSubmit={handleSubmit(this.showResult)}>
        <h3>Create Form</h3>
        <br/>
        <br/>

        <Field label="Tytuł książki" name="title" validation={req} type="text" component={this.createField}/>

        <Field label="Email autora" name="email" type="email" component={this.createField}/>

        {/*categories.touched && categories.invalid ? 'has-danger' : ''*/}
        {/*<input type="text" {...title}/>*/}
        {/*<div>{title.touched ? title.error : ''}</div>*/}

        {/*<br/>*/}

        {/*<label>Categories</label>*/}
        {/*<br/>*/}
        {/*<input type="text" {...categories}/>*/}
        {/*<div>{categories.touched ? categories.error : ''}</div>*/}

        {/*<br/>*/}

        {/*<label>Content</label>*/}
        {/*<br/>*/}
        {/*<input type="textarea" {...content} />*/}

        {/*<div>{content.touched ? content.error : ''}</div>*/}

        {/*<br/>*/}

        <button type="submit">OK</button>

      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Title is required.'
  }

  if (!values.categories) {
    errors.categories = 'At least one category is required.'
  }

  if (!values.content) {
    errors.content = 'Content is required.'
  }

  return errors
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

TestDummy = reduxForm({
  form: 'DummyForm',
}, mapStateToProps, mapDispatchToProps)(TestDummy)

export default TestDummy