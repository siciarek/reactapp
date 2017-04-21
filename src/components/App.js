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
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import FontIcon from 'material-ui/FontIcon';
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isMenuOpened: false,};
  }

  toggleMenu = () => {
    this.setState({isMenuOpened: !this.state.isMenuOpened});
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
        <div>
          <AppBar title={config.appName} onLeftIconButtonTouchTap={this.toggleMenu}/>
          {this.props.children}
          <SideMenu opened={this.state.isMenuOpened} toggleView={this.toggleMenu}/>
        </div>

      </MuiThemeProvider>
    );
  }
}

export default App