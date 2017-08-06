import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {AppHeader, AppFloatingActionButton, AppSpinner} from '../app/components'
import GenreForm from './components/GenreForm'
import {saveGenre} from './GenreActions'

const GenreCreator = ({title, onSubmit, router}) => {

  return <div>
    <AppSpinner/>
    <AppHeader title={title}/>

    <br/>

    <GenreForm onSubmit={onSubmit}/>

    <AppFloatingActionButton action={() => router.push('/genre/list')}/>
  </div>
}

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