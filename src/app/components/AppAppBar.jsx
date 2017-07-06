import React from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import {browserHistory as routerHistory} from 'react-router'

const AppAppBar = ({authenticated, title, toggleMenu}) => {

  return <AppBar position="static">
    <Toolbar>

      <IconButton color="contrast" aria-label="Menu" onTouchTap={() => toggleMenu()}>
        <MenuIcon />
      </IconButton>

      <Typography type="title" color="inherit" style={{flex: 1}}>{title}</Typography>

      {
        authenticated
          ? <Button color="contrast" onTouchTap={() => routerHistory.push('/logout')}>Log Out</Button>
          : <Button color="contrast" onTouchTap={() => routerHistory.push('/login')}>Log In</Button>
      }

    </Toolbar>
  </AppBar>
}

export default AppAppBar