import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchUserDashboardData} from './UserActions'
import Dashboard from './components/Dashboard'

const mapStateToProps = (state, ownProps) => {

  return {
    redirectTo: state.app.targetRoute,
    user: state.user,
    authenticated: state.user.authenticated,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return bindActionCreators({
    init: () => fetchUserDashboardData(ownProps),
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
