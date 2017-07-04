import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {Helmet} from 'react-helmet'

import {MuiThemeProvider} from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import {Snackbar} from 'material-ui'
import {teal200, teal900, red200, red900} from 'material-ui/styles/colors'
import {AppDrawer} from './components'
import config from './config'
import {
  APP_TOGGLE_MENU,
  APP_ERROR_HIDE,
  APP_NOTIFICATION_HIDE,
} from './AppActionTypes'
import {checkIfIsAuthenticated} from '../user/UserActions'
import './App.css'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class App extends React.Component {

  componentWillMount() {
    this.props.dispatch(checkIfIsAuthenticated())
  }

  render() {

    const errorContentStyle = {
      color: red900,
      fontWeight: Typography.fontWeightNormal
    }
    const notificationContentStyle = {
      color: teal900,
      fontWeight: Typography.fontWeightNormal
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
      <MuiThemeProvider>

        <div>
          <Helmet>
            <title>{config.appName}</title>
          </Helmet>

          <AppDrawer/>

          {notification}

          <AppBar position="static">
            <Toolbar>
              <IconButton color="contrast" aria-label="Menu" onTouchTap={() => this.props.dispatch({type: APP_TOGGLE_MENU})}>
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit">{config.appName}</Typography>
              {/*{*/}
                {/*this.props.authenticated === true*/}
                  {/*? <FlatButton*/}
                  {/*icon={<FontIcon className="material-icons">power_settings_new</FontIcon>}*/}
                  {/*onTouchTap={() => this.props.router.push('/logout')}>Log Out</FlatButton>*/}
                  {/*: <FlatButton*/}
                  {/*icon={<FontIcon className="material-icons">power_settings_new</FontIcon>}*/}
                  {/*onTouchTap={() => this.props.router.push('/login')}>Log In</FlatButton>*/}
              {/*}*/}
            </Toolbar>
          </AppBar>

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
