import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {AppHeader, AppFloatingActionButton, AppSpinner} from '../app/components'
import {GenreForm} from './components'
import {fetchItemGenre, saveGenre} from './GenreActions'

class GenreEditor extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {title, onSubmit, router, item} = this.props

    if (typeof item.id === 'undefined' || item.id === null) {
      return null
    }

    return (
      <div>
        <AppSpinner/>
        <AppHeader title={title}/>

        <br/>
        <GenreForm onSubmit={onSubmit} initialValues={item}/>

        <AppFloatingActionButton action={() => router.push('/genre/list')}/>
      </div>
    )
  }
}

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