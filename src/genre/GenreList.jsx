import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchListGenre as loadList} from './GenreActions'
import {GenreListComponent} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'Genres',
    items: state.genre.items,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadList: bindActionCreators(loadList, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreListComponent)