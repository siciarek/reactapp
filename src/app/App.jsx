import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {Helmet} from 'react-helmet'

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

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {isMenuOpened: false}
  }

  toggleMenu = () => {
    this.setState({isMenuOpened: !this.state.isMenuOpened})
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>

        <div>
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
                onTouchTap={() => this.props.dispatch(unauthenticateUser())}/>
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
    authenticated: store.user.authenticated,
  }
})(withRouter(App))
