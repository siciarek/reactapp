import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {saveGenre} from './GenreActions'
import {GenreCreator} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'Add genre',
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: data => {
      const categories = JSON.parse(localStorage.getItem('genrecategory'))
      const category = categories.filter(e => e.id === parseInt(data.category)).shift()
      dispatch(saveGenre({...data, category: category}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreCreator)