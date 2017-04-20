import React from 'react'
import {withRouter} from 'react-router'
import config from '../config'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

class Menu extends React.Component {

  handleClose(a) {
    console.log(a.close())
  }

  render() {

    const router = this.props.router
    const path = router.getCurrentLocation().pathname

    return (
      <Drawer open={this.props.opened}>
        <div className="drawer">
          <h3>{config.appName}</h3>
        </div>
        <MenuItem onTouchTap={ () => {router.push('/')}}       primaryText={'Home'} leftIcon={
          <FontIcon className="material-icons">home</FontIcon>
        }/>
        <MenuItem onTouchTap={ () => {router.push('/users')}}  primaryText={'Authors'}leftIcon={
          <FontIcon className="material-icons">face</FontIcon>
        }/>
        <MenuItem onTouchTap={ () => {router.push('/tweets')}} primaryText={'Artists'}leftIcon={
          <FontIcon className="material-icons">mic</FontIcon>
        }/>
        <MenuItem onTouchTap={ () => {router.push('/tweets')}} primaryText={'Lyrics'}leftIcon={
          <FontIcon className="material-icons">library_books</FontIcon>
        }/>
        <MenuItem onTouchTap={ () => {router.push('/tweets')}} primaryText={'Music'}leftIcon={
          <FontIcon className="material-icons">volume_up</FontIcon>
        }/>
        <MenuItem onTouchTap={ () => {router.push('/tweets')}} primaryText={'Videos'}leftIcon={
          <FontIcon className="material-icons">video_label</FontIcon>
        }/>
      </Drawer>
    );

  }
}

const MainMenu = withRouter(Menu);

export default MainMenu
