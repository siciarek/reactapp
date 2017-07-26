import React from 'react'
import {Helmet} from 'react-helmet'
import {
  Typography,
  Snackbar,
} from 'material-ui'
import {MuiThemeProvider} from 'material-ui/styles';
import {teal, red} from 'material-ui/colors'
import config from '../config'
import {
  APP_ERROR_HIDE,
  APP_NOTIFICATION_HIDE,
} from '../AppActionTypes'
import AppAppBar from  './AppAppBar'
import AppDrawer from './AppDrawer'
import '../App.css'

class App extends React.Component {

  componentWillMount() {
    this.props.checkAuth()
  }

  render() {

    const {children, dispatch, error, notification, toggleMenu, authenticated} = this.props

    if (error !== undefined && error !== null && error.hasOwnProperty('data')) {
      console.log([error.data.code, error.data.message]);
    }

    // TODO: Move to separate component

    const errorContentStyle = {
      color: red[900],
      fontWeight: Typography.fontWeightNormal
    }
    const notificationContentStyle = {
      color: teal[900],
      fontWeight: Typography.fontWeightNormal
    }


    const notificationComponent = error !== undefined && error !== null && error.hasOwnProperty('data')
      ? <Snackbar classes={{}}
                  open={true}
                  message={`${error.data.code} ${error.data.message}`}
                  autoHideDuration={config.notificationTimeout * 1000}
                  onTouchTap={() => dispatch({type: APP_ERROR_HIDE})}
                  onRequestClose={() => dispatch({type: APP_ERROR_HIDE})}
      />
      : (notification
        ? <Snackbar classes={{}}
                    open={true}
                    message={`${notification}`}
                    autoHideDuration={config.notificationTimeout * 1000}
                    onTouchTap={() => dispatch({type: APP_NOTIFICATION_HIDE})}
                    onRequestClose={() => dispatch({type: APP_NOTIFICATION_HIDE})}
        /> : null)

    return <MuiThemeProvider>
      <div>
        <Helmet>
          <title>{config.appName}</title>
        </Helmet>
        <AppDrawer/>
        <AppAppBar title={config.appName} authenticated={authenticated} toggleMenu={toggleMenu}/>
        {notificationComponent}
        {children}
      </div>
    </MuiThemeProvider>
  }
}

export default App