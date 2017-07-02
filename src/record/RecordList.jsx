import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ListItemIcon from 'material-ui/svg-icons/av/album'
import {fetchRecordList as loadList} from './RecordActions'
import {RecordList} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    icon: <ListItemIcon/>,
    items: state.record.items,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadList: bindActionCreators(loadList, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordList)
