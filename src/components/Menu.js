import React from 'react'
import {withRouter} from 'react-router'
import config from '../config'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

class Menu extends React.Component {

  render() {

    const router = this.props.router
    const path = router.getCurrentLocation().pathname

    return (
      <Drawer docked={false}
              open={this.props.opened}
              onRequestChange={() => {this.props.toggleView()}}
      >
        <AppBar title={config.appName} showMenuIconButton={false} onTouchTap={ () => {
          this.props.toggleView()
          router.push('/')
        }}/>
        <MenuItem onTouchTap={ () => {
           this.props.toggleView()
           router.push('/')
        }} primaryText={'Home'} leftIcon={
          <FontIcon className="material-icons">home</FontIcon>
        }/>
        <MenuItem onTouchTap={ () => {
          this.props.toggleView()
          router.push('/users')
        }} primaryText={'Authors'} leftIcon={
          <FontIcon className="material-icons">face</FontIcon>
        }/>
        <MenuItem onTouchTap={ () => {
          this.props.toggleView()
          router.push('/tweets')
        }} primaryText={'Artists'} leftIcon={
          <FontIcon className="material-icons">mic</FontIcon>
        }/>
        <MenuItem onTouchTap={ () => {
          this.props.toggleView()
          router.push('/tweets')
        }} primaryText={'Lyrics'} leftIcon={
          <FontIcon className="material-icons">library_books</FontIcon>
        }/>
        <MenuItem onTouchTap={ () => {
          this.props.toggleView()
          router.push('/tweets')
        }} primaryText={'Music'} leftIcon={
          <FontIcon className="material-icons">volume_up</FontIcon>
        }/>
        <MenuItem onTouchTap={ () => {
          this.props.toggleView()
          router.push('/tweets')
        }} primaryText={'Videos'} leftIcon={
          <FontIcon className="material-icons">video_label</FontIcon>
        }/>
      </Drawer>
    );

  }
}

const MainMenu = withRouter(Menu);

export default MainMenu
