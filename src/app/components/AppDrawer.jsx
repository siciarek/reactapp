import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'
import {
  AppBar,
  Drawer,
  MenuItem,
  FontIcon,
  Divider,
} from 'material-ui'
import config from '../config'
import {routes} from '../routes'

function AppDrawer(props) {

  const matchedRoute = props.router.getCurrentLocation().pathname
  const iconChecked = <FontIcon className="material-icons">check</FontIcon>

  const items =
    routes
    .filter(e => {
      return e === null || e.hasOwnProperty('private') === false || e.private === props.authenticated
    })
    .map((e, i) => {

      if (e === null) {
        return <Divider inset={false} key={i}/>
      }

      let primaryTogglesNestedList = false
      let nestedItems = []

      if (e.hasOwnProperty('children') && e.children.length > 0) {
        primaryTogglesNestedList = true
        nestedItems = e.children.map((ce, ci) => {
            return <MenuItem
              key={ci}
              leftIcon={
                <FontIcon className="material-icons">{ce.icon}</FontIcon>
              }
              primaryText={ce.label}
              onTouchTap={() => {
                props.router.replace(ce.route)
                props.toggleView()
              }}
              rightIcon={
                matchedRoute === ce.route ? iconChecked : null
              }
            />
          }
        )
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
        primaryTogglesNestedList={primaryTogglesNestedList}
        nestedItems={nestedItems}
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
