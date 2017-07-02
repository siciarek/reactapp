import React from 'react'
import {connect} from 'react-redux'
import AppDrawerComponent from './AppDrawerComponent'
import {
  APP_TOGGLE_MENU
} from '../AppActionTypes'

export default connect(
  (store) => {
    return {
      opened: store.app.menu,
      authenticated: store.user.authenticated,
    }
  },
  (dispatch) => {
    return {
      toggleVisibility: () => { dispatch({type: APP_TOGGLE_MENU}) },
    }
  }
)(AppDrawerComponent)