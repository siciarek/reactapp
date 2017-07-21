import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {unauthenticateUser} from './UserActions'
import LogoutComponent from './components/LogoutComponent'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    unauthenticate: bindActionCreators(unauthenticateUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent)
