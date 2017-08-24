import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchRecordItem} from './RecordActions'
import {RecordItem} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.record.current,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: () => fetchRecordItem(ownProps.params.id)
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordItem)
