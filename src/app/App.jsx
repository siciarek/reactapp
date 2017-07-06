import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router'
import {Helmet} from 'react-helmet'
import Typography from 'material-ui/Typography';
import Snackbar from 'material-ui/Snackbar'
import {MuiThemeProvider} from 'material-ui/styles';
import {teal, red} from 'material-ui/styles/colors'
import config from './config'
import {
  APP_TOGGLE_MENU,
  APP_ERROR_HIDE,
  APP_NOTIFICATION_HIDE,
} from './AppActionTypes'
import {AppAppBar, AppDrawer} from './components'
import {checkIfIsAuthenticated} from '../user/UserActions'
import './App.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class App extends React.Component {

  componentWillMount() {
    this.props.checkAuth()
  }

  render() {

    const {children, dispatch, error, notification, toggleMenu, authenticated} = this.props

    // TODO: Move to separate component

    const errogrContentStyle = {
      color: red[900],
      fontWeight: Typography.fontWeightNormal
    }
    const notificationContentStyle = {
      color: teal[900],
      fontWeight: Typography.fontWeightNormal
    }

    const notificationComponent = this.props.error
      ? <Snackbar classes={{}}
                  bodyStyle={{backgroundColor: red[200]}}
                  contentStyle={errorContentStyle}
                  open={true}
                  message={`${this.error.data.code} ${error.data.message}`}
                  autoHideDuration={config.notificationTimeout * 1000}
                  onActionTouchTap={() => dispatch({type: APP_ERROR_HIDE})}
                  onRequestClose={() => dispatch({type: APP_ERROR_HIDE})}
      />
      : (notification
        ? <Snackbar classes={{}}
                    bodyStyle={{backgroundColor: teal[200]}}
                    contentStyle={notificationContentStyle}
                    open={true}
                    message={`${notification}`}
                    autoHideDuration={config.notificationTimeout * 1000}
                    onActionTouchTap={() => dispatch({type: APP_NOTIFICATION_HIDE})}
                    onRequestClose={() => dispatch({type: APP_NOTIFICATION_HIDE})}
        /> : null)

    return <MuiThemeProvider>
      <div>
        <Helmet>
          <title>{config.appName}</title>
        </Helmet>
        <AppDrawer/>
        <AppAppBar title={config.appName} authenticated={authenticated} toggleMenu={toggleMenu}/>
        {children}
        {notificationComponent}
      </div>
    </MuiThemeProvider>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notification: state.app.notification,
    error: state.app.error,
    authenticated: state.user.authenticated,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    checkAuth: bindActionCreators(checkIfIsAuthenticated, dispatch),
    toggleMenu: () => dispatch({type: APP_TOGGLE_MENU}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
