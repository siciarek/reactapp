/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar';
import SideMenu from './Menu';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import config from '../config'
import './App.css'

// import RaisedButton from 'material-ui/RaisedButton';
// import FlatButton from 'material-ui/FlatButton';
// import {fullWhite} from 'material-ui/styles/colors';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => {
    this.setState({open: !this.state.open});
  }

  render() {

    const container = {
      fontFamily: 'Roboto, sans-serif',
      margin: 32
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
        <div>
          <AppBar title={config.appName} onLeftIconButtonTouchTap={this.handleToggle}/>
          <div style={container}>
            {this.props.children}
          </div>
          <SideMenu opened={this.state.open}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App