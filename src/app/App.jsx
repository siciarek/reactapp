import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {Helmet} from 'react-helmet'

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {AppBar, FlatButton, FontIcon, Snackbar} from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import AppDrawer from './components/AppDrawer'
import config from './config'
import './App.css'
import {
  APP_ERROR_HIDE,
  APP_NOTIFICATION_HIDE,
} from './AppActionTypes'
import {checkIfIsAuthenticated} from '../user/UserActions'
import {black, teal300, red300} from 'material-ui/styles/colors'
import typography from 'material-ui/styles/typography'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {isMenuOpened: false}
  }

  componentWillMount() {
    this.props.dispatch(checkIfIsAuthenticated())
  }

  toggleMenu = () => {
    this.setState({isMenuOpened: !this.state.isMenuOpened})
  }

  render() {

    const notificationContentStyle = {
      color: black,
      fontWeight: typography.fontWeightNormal
    }

    const notification = this.props.error
      ? <Snackbar
        bodyStyle={{backgroundColor: red300}}
        contentStyle={notificationContentStyle}
        open={true}
        message={`${this.props.error.data.code} ${this.props.error.data.message}`}
        autoHideDuration={config.notificationTimeout * 1000}
        onActionTouchTap={() => this.props.dispatch({type: APP_ERROR_HIDE})}
        onRequestClose={() => this.props.dispatch({type: APP_ERROR_HIDE})}
      />
      : (this.props.notification ? <Snackbar
        bodyStyle={{backgroundColor: teal300}}
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

          <AppDrawer
            authenticated={this.props.authenticated}
            opened={this.state.isMenuOpened}
            toggleView={this.toggleMenu}
          />

          {notification}

          <AppBar
            title={config.appName}
            onLeftIconButtonTouchTap={this.toggleMenu}
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
