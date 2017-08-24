import React from 'react'
import PropTypes from 'prop-types'
import {
  Snackbar,
  Typography,
} from 'material-ui'
import Fade from 'material-ui/transitions/Fade';
import {teal, red} from 'material-ui/colors'
import config from '../../config'

const AppNotification = ({notificationType, notification, hide}) => {

  if (!notificationType) {
    return null
  }

  if (!notification) {
    return null
  }

  const {code, message} = notification

  if (!code && !message) {
    return null
  }

  const style = notificationType === 'error'
    ? {
      backgroundColor: red[900],
      fontWeight: Typography.fontWeightNormal
    }
    : {
      backgroundColor: teal[900],
      fontWeight: Typography.fontWeightNormal
    }

  return <Snackbar classes={{}}
                   open={true}
                   SnackbarContentProps={{
                     style: style
                   }}
                   message={`${code} ${message}`.trim()}
                   autoHideDuration={config.notificationTimeout * 1000}
                   transition={Fade}
                   onTouchTap={hide}
                   onRequestClose={hide}/>
}

AppNotification.propTypes = {
  notificationType: PropTypes.string,
  notification: PropTypes.object,
  hide: PropTypes.func.isRequired,
}

AppNotification.defaultProps = {
  notificationType: null,
  notification: null,
  hide: () => {
  }
}

export default AppNotification
