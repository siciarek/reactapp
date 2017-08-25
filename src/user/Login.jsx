import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {authenticateUser} from './UserActions'
import {Login} from './components'

const mapDispatchToProps = (dispatch, ownProps) => {

  return bindActionCreators({
    onSubmit: authenticateUser,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
