import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchSong, saveSong, removeSong} from './SongActions'
import {SongEditor} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.song.current,
    authenticated: state.user.authenticated,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: () => fetchSong(ownProps.params.id),
    saveSong: data => saveSong({...data, id: ownProps.params.id}),
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SongEditor)