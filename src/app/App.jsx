import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {APP_TOGGLE_MENU} from './AppActionTypes'
import App from './components/App'
import {checkIfIsAuthenticated} from '../user/UserActions'

const mapStateToProps = (state, ownProps) => {
  return {
    notification: state.app.notification,
    error: state.app.error,
    authenticated: state.user.authenticated,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: dispatch,
    init: bindActionCreators(checkIfIsAuthenticated, dispatch),
    toggleMenu: () => dispatch({type: APP_TOGGLE_MENU}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
