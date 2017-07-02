import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ListItemIcon from 'material-ui/svg-icons/av/album'
import {fetchRecordList as fetchList} from './RecordActions'
import {RecordList} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    icon: <ListItemIcon/>,
    items: state.record.items,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    'fetchList': bindActionCreators(fetchList, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordList)
