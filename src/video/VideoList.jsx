import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchVideoList} from './VideoActions'
import {VideoList} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.video.items,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: fetchVideoList,
    goto: id => ownProps.router.push(`/video/${id}`),
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)