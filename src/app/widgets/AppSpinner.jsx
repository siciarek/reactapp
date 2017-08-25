import {connect} from 'react-redux'
import {AppSpinner} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    show: state.app.processing,
  }
}

export default connect(mapStateToProps)(AppSpinner)