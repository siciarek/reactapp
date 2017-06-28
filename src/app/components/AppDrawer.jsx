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

const AppDrawer = ({router, authenticated, opened, toggleView}) => {

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
              rightIcon={
                matchedRoute === ce.route ? iconChecked : null
              }
              onTouchTap={() => {
                router.push(ce.route)
                toggleView()
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
          router.push(e.route)
          toggleView()
        }}
        primaryTogglesNestedList={nestedItems.length > 0}
        nestedItems={nestedItems}
      />
    }
  )

  return (
    <Drawer
      docked={false}
      open={opened}
      onRequestChange={() => {
        toggleView()
      }}
    >
      <AppBar
        title={config.appName}
        showMenuIconButton={false}
        onTouchTap={() => toggleView()}
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
