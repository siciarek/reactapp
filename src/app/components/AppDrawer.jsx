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
import menu from '../menu'

function AppDrawer(props) {

  const matchedRoute = props.router.getCurrentLocation().pathname
  const iconChecked = <FontIcon className="material-icons">check</FontIcon>

  const items = menu
  .filter(e => {
    return e === null || e.hasOwnProperty('private') === false || e.private === props.authenticated
  })
  .map((e, i) => {

      if (e === null) {
        return <Divider inset={false} key={i}/>
      }

      const nestedItems = e.hasOwnProperty('children') && e.children.length > 0
        ? e.children.map((ce, ci) => {
            return <MenuItem
              key={ci}
              primaryText={ce.label}
              leftIcon={
                <FontIcon className="material-icons">{ce.icon}</FontIcon>
              }
              rightIcon={
                matchedRoute === ce.route ? iconChecked : null
              }
              onTouchTap={() => {
                props.router.push(ce.route)
                props.toggleView()
              }}
            />
          }
        )
        : []

      return <MenuItem
        key={i}
        primaryText={e.label}
        leftIcon={
          <FontIcon className="material-icons">{e.icon}</FontIcon>
        }
        rightIcon={
          matchedRoute === e.route ? iconChecked : null
        }
        onTouchTap={() => {
          props.router.push(e.route)
          props.toggleView()
        }}
        primaryTogglesNestedList={nestedItems.length > 0}
        nestedItems={nestedItems}
      />
    }
  )

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
  opened: true,
  authenticated: false,
  toggleView: () => {
    console.log('Not implemented yet.')
  }
}

export default withRouter(AppDrawer)
