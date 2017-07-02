import React from 'react'
import PropTypes from 'prop-types'
import {browserHistory as router} from 'react-router'
import {
  AppBar,
  Drawer,
  MenuItem,
  FontIcon,
  Divider,
} from 'material-ui'
import config from '../config'
import menu from '../menu'

const AppDrawerComponent = ({opened, authenticated, toggleVisibility}) => {

  const matchedRoute = router.getCurrentLocation().pathname
  const iconChecked = <FontIcon className="material-icons">check</FontIcon>

  const items = menu
  .filter(e => {
    return e === null || e.hasOwnProperty('private') === false || e.private === authenticated
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
            onTouchTap={() => {
              router.push(ce.route)
              toggleVisibility()
            }}
            rightIcon={
              matchedRoute === ce.route ? iconChecked : null
            }
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
        toggleVisibility()
        router.push(e.route)
      }}
      primaryTogglesNestedList={nestedItems.length > 0}
      nestedItems={nestedItems}
    />
  })

  return <Drawer docked={false} open={opened} onRequestChange={() => toggleVisibility()}>
    <AppBar title={config.appName} showMenuIconButton={false} onTouchTap={() => toggleVisibility()}/>
    {items}
  </Drawer>
}

AppDrawerComponent.propTypes = {
  opened: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
}

AppDrawerComponent.defaultProps = {
  opened: false,
  authenticated: false,
  toggleVisibility: () => console.log('Visibility toggling is not implemented yet.')
}

export default AppDrawerComponent