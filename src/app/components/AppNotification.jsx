import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  APP_NOTIFICATION_HIDE,
} from '../AppActionTypes'
import {AppNotification} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    notificationType: state.app.notificationType,
    notification: state.app.notification,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    hide: () => ({type: APP_NOTIFICATION_HIDE}),
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNotification)
