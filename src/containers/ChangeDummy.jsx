import { connect } from 'react-redux'
import { changeDummy } from '../actions'
import Dummy from '../components/Dummy'

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.text + 'X'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(changeDummy(ownProps.text))
    }
  }
}

const ChangeDummy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dummy)

export default ChangeDummy