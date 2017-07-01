import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {Helmet} from 'react-helmet'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {AppBar, FlatButton, FontIcon, Snackbar} from 'material-ui'
import {teal200, teal900, red200, red900} from 'material-ui/styles/colors'
import {typography} from 'material-ui/styles'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {AppDrawer} from './components'
import config from './config'
import {
  APP_TOGGLE_MENU,
  APP_ERROR_HIDE,
  APP_NOTIFICATION_HIDE,
} from './AppActionTypes'
import {checkIfIsAuthenticated} from '../user/UserActions'
import './App.css'

injectTapEventPlugin()

class App extends React.Component {

  componentWillMount() {
    this.props.dispatch(checkIfIsAuthenticated())
  }

  render() {

    const errorContentStyle = {
      color: red900,
      fontWeight: typography.fontWeightNormal
    }
    const notificationContentStyle = {
      color: teal900,
      fontWeight: typography.fontWeightNormal
    }

    // TODO: Move to separate component
    const notification = this.props.error
      ? <Snackbar
        bodyStyle={{backgroundColor: red200}}
        contentStyle={errorContentStyle}
        open={true}
        message={`${this.props.error.data.code} ${this.props.error.data.message}`}
        autoHideDuration={config.notificationTimeout * 1000}
        onActionTouchTap={() => this.props.dispatch({type: APP_ERROR_HIDE})}
        onRequestClose={() => this.props.dispatch({type: APP_ERROR_HIDE})}
      />
      : (this.props.notification ? <Snackbar
        bodyStyle={{backgroundColor: teal200}}
        contentStyle={notificationContentStyle}
        open={true}
        message={`${this.props.notification}`}
        autoHideDuration={config.notificationTimeout * 1000}
        onActionTouchTap={() => this.props.dispatch({type: APP_NOTIFICATION_HIDE})}
        onRequestClose={() => this.props.dispatch({type: APP_NOTIFICATION_HIDE})}
      /> : null)

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>

        <div>
          <Helmet>
            <title>{config.appName}</title>
          </Helmet>

          <AppDrawer/>

          {notification}

          <AppBar
            title={config.appName}
            onLeftIconButtonTouchTap={() => this.props.dispatch({type: APP_TOGGLE_MENU})}
            iconElementRight={
              this.props.authenticated === true
                ? <FlatButton
                label="Log Out"
                labelPosition="before"
                icon={<FontIcon className="material-icons">power_settings_new</FontIcon>}
                onTouchTap={() => this.props.router.push('/logout')}/>
                : <FlatButton
                label="Log In"
                labelPosition="before"
                icon={<FontIcon className="material-icons">power_settings_new</FontIcon>}
                onTouchTap={() => this.props.router.push('/login')}/>
            }
          />

          {this.props.children}

        </div>

      </MuiThemeProvider>
    )
  }
}

export default connect((store) => {
  return {
    notification: store.app.notification,
    error: store.app.error,
    authenticated: store.user.authenticated,
  }
})(withRouter(App))
