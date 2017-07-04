import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchRecordList as loadList} from './RecordActions'
import {RecordList} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.record.items,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadList: bindActionCreators(loadList, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordList)
