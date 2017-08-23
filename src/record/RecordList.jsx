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
  return {
    init: bindActionCreators(fetchRecordList, dispatch),
    goto: id => ownProps.router.push(`/records/${id}`),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordList)
