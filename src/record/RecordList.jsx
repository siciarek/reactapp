import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchRecordList} from './RecordActions'
import {RecordList} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.record.items,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: fetchRecordList
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordList)
