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
import {APP_ERROR_HIDE} from './AppActionTypes'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {isMenuOpened: false}
  }

  toggleMenu = () => {
    this.setState({isMenuOpened: !this.state.isMenuOpened})
  }

  render() {

    const notification = this.props.error ? <Snackbar
      open={true}
      message={`${this.props.error.data.code} ${this.props.error.data.message}`}
      autoHideDuration={config.notificationTimeout * 1000}
      onRequestClose={() => this.props.dispatch({type: APP_ERROR_HIDE})}
    /> : null

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>

        <div>

          {notification}

          <Helmet>
            <title>{config.appName}</title>
          </Helmet>

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

          <AppDrawer
            authenticated={this.props.authenticated}
            opened={this.state.isMenuOpened}
            toggleView={this.toggleMenu}
          />

        </div>

      </MuiThemeProvider>
    )
  }
}

export default connect((store) => {
  return {
    error: store.app.error,
    authenticated: store.user.authenticated,
  }
})(withRouter(App))
