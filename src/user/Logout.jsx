import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {unauthenticateUser} from './UserActions'
import {Logout} from './components'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    unauthenticate: bindActionCreators(unauthenticateUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
