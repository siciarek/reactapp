import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchRecordList as init} from './RecordActions'
import {RecordList} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.record.items,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    init: bindActionCreators(init, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordList)
