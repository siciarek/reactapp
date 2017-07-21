import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {authenticateUser} from './UserActions'
import LoginComponent from './components/LoginComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'Log In',
    initialState: {
      username: 'colak',
      password: 'pass',
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    authenticate: bindActionCreators(authenticateUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
