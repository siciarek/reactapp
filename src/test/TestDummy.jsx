import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel, Checkbox} from 'material-ui'
import {AppSpinner, AppHeader} from '../app/components'
import {debounce} from 'lodash'
import YTSearch from 'youtube-api-search'
import {reduxForm} from 'redux-form'
import {createPost} from './TestActions'

class TestDummy extends React.Component {

  render() {

    const {fields: { title, categories, content}, handleSubmit, createPost} = this.props

    return (
      <form onSubmit={handleSubmit(createPost)}>
        <h3>Create Form</h3>
        <br/>
        <br/>

        <label>Title</label>
        <br/>
        {/*categories.touched && categories.invalid ? 'has-danger' : ''*/}
        <input type="text" {...title}/>
        <div>{title.touched ? title.error : ''}</div>

        <br/>

        <label>Categories</label>
        <br/>
        <input type="text" {...categories}/>
        <div>{categories.touched ? categories.error : ''}</div>

        <br/>

        <label>Content</label>
        <br/>
        <input type="textarea" {...content} />

        <div>{content.touched ? content.error : ''}</div>

        <br/>

        <button type="submit">OK</button>

      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if(!values.title) {
    errors.title = 'Title is required.'
  }

  if(!values.categories) {
    errors.categories = 'At least one category is required.'
  }

  if(!values.content) {
    errors.content = 'Content is required.'
  }

  return errors
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {createPost}
}

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'],
  validate,
}, mapStateToProps, mapDispatchToProps)(TestDummy)
