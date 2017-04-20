import React from 'react'
import {withRouter} from 'react-router'
import config from '../config'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';

class Menu extends React.Component {

  setRoute(route) {
    this.props.router.push(route)
    this.props.toggleView()
  }

  render() {

    const router = this.props.router
    const path = router.getCurrentLocation().pathname

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

const MainMenu = withRouter(Menu);

export default MainMenu


/*
Do zaznaczenia:
 rightIcon={
 <FontIcon className="material-icons">checked</FontIcon>
 }
 */