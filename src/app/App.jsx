/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import SideBar from './SideBar'
import config from './config'
import './App.css'

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
          <AppBar id="appbar" title={config.appName} onLeftIconButtonTouchTap={this.toggleMenu}/>
          {this.props.children}
          <SideBar opened={this.state.isMenuOpened} toggleView={this.toggleMenu}/>
        </div>

      </MuiThemeProvider>
    )
  }
}

export default App