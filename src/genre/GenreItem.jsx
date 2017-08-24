import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {GenreItem} from './components'
import {fetchItemGenre, removeGenre} from './GenreActions'

const mapStateToProps = (state, ownProps) => {
  return {
    processing: state.app.processing,
    item: state.genre.current,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: () => fetchItemGenre(ownProps.params.id),
    removeItem: id => removeGenre(id),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreItem)