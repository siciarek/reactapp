import {connect} from 'react-redux'
import AppSpinnerComponent from './AppSpinnerComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    show: state.app.processing,
  }
}

export default connect(mapStateToProps)(AppSpinnerComponent)