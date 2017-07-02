import {connect} from 'react-redux'
import {APP_TOGGLE_MENU} from '../AppActionTypes'
import AppDrawerComponent from './AppDrawerComponent'

const mapStateToProps = (state) => {
  return {
    opened: state.app.menu,
    authenticated: state.user.authenticated,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleVisibility: () => dispatch({type: APP_TOGGLE_MENU}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawerComponent)