import React from 'react'
import {withRouter} from 'react-router'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';

import config from '../config'

class SideBar extends React.Component {

  setRoute(route) {
    this.props.router.push(route)
    this.props.toggleView()
  }

  render() {

    // const path = router.getCurrentLocation().pathname

    return (
      <Drawer docked={false}
              open={this.props.opened}
              onRequestChange={() => {
                this.props.toggleView()
              }}
      >
        <AppBar title={config.appName} showMenuIconButton={false} onTouchTap={() => this.props.toggleView()}/>

        <MenuItem primaryText={'Home'} onTouchTap={() => this.setRoute('/')} leftIcon={
          <FontIcon className="material-icons">home</FontIcon>
        }/>
        <MenuItem onTouchTap={() => this.setRoute('/authors')} primaryText={'Authors'} leftIcon={
          <FontIcon className="material-icons">face</FontIcon>
        }
        />
        <MenuItem onTouchTap={() => this.setRoute('/artists')} primaryText={'Artists'} leftIcon={
          <FontIcon className="material-icons">mic</FontIcon>
        }/>
        <Divider/>
        <MenuItem onTouchTap={() => this.setRoute('/lyrics')} primaryText={'Lyrics'} leftIcon={
          <FontIcon className="material-icons">library_books</FontIcon>
        }/>
        <MenuItem onTouchTap={() => this.setRoute('/music')} primaryText={'Music'} leftIcon={
          <FontIcon className="material-icons">volume_up</FontIcon>
        }/>
        <MenuItem onTouchTap={() => this.setRoute('/videos')} primaryText={'Videos'} leftIcon={
          <FontIcon className="material-icons">video_label</FontIcon>
        }/>
      </Drawer>
    );

  }
}

const MainMenu = withRouter(SideBar);

export default MainMenu
