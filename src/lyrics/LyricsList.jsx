import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchLyricsList} from './LyricsActions'
import {removeSong} from '../song/SongActions'
import {LyricsList} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.user.authenticated,
    items: state.lyrics.items,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: () => fetchLyricsList(),
    removeItem: removeSong,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LyricsList)