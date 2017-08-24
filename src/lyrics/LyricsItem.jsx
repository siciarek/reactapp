import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchLyricsItem} from './LyricsActions'
import {LyricsItem} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    current: state.lyrics.current,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: () => fetchLyricsItem(ownProps.params.id),
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LyricsItem)