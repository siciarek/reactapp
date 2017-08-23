import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchAudioList} from './AudioActions'
import {AudioList} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.audio.items,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: fetchAudioList,
    goto: id => ownProps.router.push(`/audio/${id}`),
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioList)