import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchUserDashboardData} from './UserActions'
import {Dashboard} from './components'

const mapStateToProps = state => {

  return {
    item: state.user.data
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    init: bindActionCreators(fetchUserDashboardData, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
