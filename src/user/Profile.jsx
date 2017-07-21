import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchUserProfile} from './UserActions'
import Profile from './components/Profile'

const mapStateToProps = (state, ownProps) => {
  return {
    current: state.user,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    init: bindActionCreators(fetchUserProfile, dispatch),
    dispatch: dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
