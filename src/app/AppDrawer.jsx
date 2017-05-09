import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'
import {AppBar, Drawer, MenuItem, FontIcon, Divider} from 'material-ui'

import {routes} from './routes'
import config from './config'

function AppDrawer(props) {

    const matchedRoute = props.router.getCurrentLocation().pathname
    const iconChecked = <FontIcon className="material-icons">check</FontIcon>

    let xroutes = [...routes]

    if (props.authenticated === true) {
      xroutes = xroutes.filter(function (e) {
        return e === null || e.hasOwnProperty('private') === false || e.private === true
      })
    }
    else {
      xroutes = xroutes.filter(function (e) {
        return e === null || e.hasOwnProperty('private') === false || e.private === false
      })
    }

    const items = xroutes.map((e, i) => {
      if (e === null) {
        return <Divider inset={false} key={i}/>
      }

      return <MenuItem
        key={i}
        primaryText={e.label}
        onTouchTap={() => {
          props.router.push(e.route)
          props.toggleView()
        }}
        leftIcon={
          <FontIcon className="material-icons">{e.icon}</FontIcon>
        }
        rightIcon={
          matchedRoute === e.route ? iconChecked : null
        }
      />
    })

    return (
      <Drawer
        docked={false}
        open={props.opened}
        onRequestChange={() => {
          props.toggleView()
        }}
      >
        <AppBar
          title={config.appName}
          showMenuIconButton={false}
          onTouchTap={() => props.toggleView()}
        />
        {items}
      </Drawer>
    )
}

AppDrawer.propTypes = {
  opened: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  toggleView: PropTypes.func.isRequired,
}

AppDrawer.defaultProps = {
  opened: false,
  authenticated: false,
  toggleView: () => {
  },
}

export default withRouter(AppDrawer)
