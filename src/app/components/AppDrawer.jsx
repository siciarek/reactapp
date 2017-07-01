import React from 'react'
import {connect} from 'react-redux'
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
import {
  APP_TOGGLE_MENU
} from '../AppActionTypes'

class AppDrawer extends React.Component {

  toggleView = () => this.props.dispatch({type: APP_TOGGLE_MENU})

  render() {
    const {opened, authenticated, router} = this.props

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
                  this.toggleView()
                  router.push(ce.route)
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
            this.toggleView()
            router.push(e.route)
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
        onRequestChange={() => this.toggleView()}
      >
        <AppBar
          title={config.appName}
          showMenuIconButton={false}
          onTouchTap={() => this.toggleView()}
        />
        {items}
      </Drawer>
    )
  }
}

AppDrawer.propTypes = {
  opened: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
}

AppDrawer.defaultProps = {
  opened: false,
  authenticated: false,
}

// export default withRouter(AppDrawer)
export default connect((store) => {
  return {
    opened: store.app.menu,
    authenticated: store.user.authenticated,
  }
})(withRouter(AppDrawer))