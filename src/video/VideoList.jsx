import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ItemIcon from 'material-ui-icons/Theaters'
import {fetchVideoList} from './VideoActions'
import AutoloadingList from '../app/components/AppSimpleAutoloadingList'

const mapStateToProps = (state, ownProps) => {
  return {
    model: 'video',
    title: 'Videos',
    icon: <ItemIcon/>,
    goTo: id => ownProps.router.push(`/video/${id}`),
    items: state.video.items,
    sortable: state.user.authenticated,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: fetchVideoList,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoloadingList)