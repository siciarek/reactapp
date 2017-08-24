import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import {browserHistory as router} from 'react-router'

const AppAppBar = ({authenticated, title, toggleMenu}) => {

  return <AppBar position="static">
    <Toolbar>

      <IconButton color="contrast" aria-label="Menu" onTouchTap={() => toggleMenu()}>
        <MenuIcon />
      </IconButton>

      <Typography type="title" color="inherit" style={{flex: 1}}>{title}</Typography>
      {
        authenticated
          ? <Button color="contrast" onTouchTap={() => router.push('/logout')}>Log Out</Button>
          : <Button color="contrast" onTouchTap={() => router.push('/login')}>Log In</Button>
      }
    </Toolbar>
  </AppBar>
}

AppAppBar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

AppAppBar.defaultProps = {
  authenticated: false,
  title: 'Application',
  toggleMenu: () => console.log('toggleMenu'),
}

export default AppAppBar