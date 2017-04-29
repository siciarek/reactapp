import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';

import {routes} from './routes'
import config from './config'

class AppDrawer extends React.Component {

  static propTypes = {
    opened: PropTypes.bool.isRequired,
    toggleView: PropTypes.func.isRequired,
  }

  static defaultProps = {
    opened: false,
    toggleView: () => {
    },
  }

  setRoute(route) {
    this.props.router.push(route)
    this.props.toggleView()
  }

  render() {

    const matchedRoute = this.props.router.getCurrentLocation().pathname
    const iconChecked = <FontIcon className="material-icons">check</FontIcon>

    let xroutes = routes

    if(this.props.authenticated === true) {
      xroutes = xroutes.filter(function(e) {
        return e === null || e.hasOwnProperty('private') === false || e.private === true
      })
    }
    else {
      xroutes = xroutes.filter(function(e) {
        return e === null || e.hasOwnProperty('private') === false || e.private === false
      })
    }

    const items = xroutes.map((e, i) => {
      if (e === null) {
        return <Divider key={i}/>
      }


      return <MenuItem
        key={i}
        primaryText={e.label}
        onTouchTap={() => this.setRoute(e.route)}
        leftIcon={
          <FontIcon className="material-icons">{e.icon}</FontIcon>
        }
        rightIcon={
          matchedRoute === e.route ? iconChecked : null
        }
      />
    });


    return (
      <Drawer
        docked={false}
        open={this.props.opened}
        onRequestChange={() => {
          this.props.toggleView()
        }}
      >
        <AppBar
          title={config.appName}
          showMenuIconButton={false}
          onTouchTap={() => this.props.toggleView()}
        />
        {items}
      </Drawer>
    );
  }
}

export  default connect((store) => {
  return {
    authenticated: store.user.authenticated,
  }
})(withRouter(AppDrawer));
