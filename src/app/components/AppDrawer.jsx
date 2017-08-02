import {connect} from 'react-redux'
import AppDrawerComponent from './AppDrawerComponent'
import {APP_TOGGLE_MENU} from '../AppActionTypes'

const mapStateToProps = (state) => {
  return {
    opened: state.app.menu,
    authenticated: state.user.authenticated,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleVisibility: () => dispatch({type: APP_TOGGLE_MENU}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawerComponent)