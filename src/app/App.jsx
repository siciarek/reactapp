/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router'

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import AppDrawer from './AppDrawer'
import config from './config'
import './App.css'
import {unauthenticateUser} from '../user/UserActions'

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton
        {...this.props}
        label="Log In"
        labelPosition="before"
        icon={<FontIcon className="material-icons">power_settings_new</FontIcon>}
      />
    )
  }
}

class Logged extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton
        {...this.props}
        label="Log Out"
        labelPosition="before"
        icon={<FontIcon className="material-icons">power_settings_new</FontIcon>}
      />
    )
  }
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {isMenuOpened: false,}
  }

  toggleMenu = () => {
    this.setState({isMenuOpened: !this.state.isMenuOpened})
  }

  render() {

    return (
      <MuiThemeProvider ref="app" muiTheme={getMuiTheme(baseTheme)}>
        <div>
          <AppBar
            id="appbar"
            title={config.appName}
            onLeftIconButtonTouchTap={this.toggleMenu}
            iconElementRight={
              this.props.authenticated
                ? <Logged onTouchTap={() => this.props.dispatch(unauthenticateUser())}/>
                : <Login onTouchTap={() => this.props.router.push('/login')}/>}
          />

          {this.props.children}

          <AppDrawer
            opened={this.state.isMenuOpened}
            toggleView={this.toggleMenu}
          />
        </div>

      </MuiThemeProvider>
    )
  }
}

export  default connect((store) => {
  return {
    authenticated: store.user.authenticated,
  }
})(withRouter(App));
