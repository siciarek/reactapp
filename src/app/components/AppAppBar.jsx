import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {AppAppBar} from './components'

import {APP_TOGGLE_MENU} from '../AppActionTypes'

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.user.authenticated,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    toggleMenu: () => ({type: APP_TOGGLE_MENU})
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppAppBar)
