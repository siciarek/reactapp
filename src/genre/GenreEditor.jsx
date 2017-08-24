import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchItemGenre, saveGenre} from './GenreActions'
import {GenreEditor} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'Edit genre',
    item: state.genre.current,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    init: bindActionCreators(() => fetchItemGenre(ownProps.params.id), dispatch),
    onSubmit: data => {
      const categories = JSON.parse(localStorage.getItem('genrecategory'))
      const category = categories.filter(e => e.id === parseInt(data.category)).shift()
      dispatch(saveGenre({...data, id: ownProps.params.id, category: category}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreEditor)