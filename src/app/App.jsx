import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {checkIfIsAuthenticated} from '../user/UserActions'
import App from './widgets/App'

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: () => checkIfIsAuthenticated,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
