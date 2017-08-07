import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchUserProfile, saveUser} from './UserActions'
import Profile from './components/Profile'

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.user,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    init: bindActionCreators(fetchUserProfile, dispatch),
    submit: bindActionCreators(saveUser, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
