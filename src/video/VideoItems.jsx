import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchVideoItems} from './VideoActions'
import VideoItems from './components/VideoItems'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.video.current,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: () => fetchVideoItems(ownProps.params.id)
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoItems)
