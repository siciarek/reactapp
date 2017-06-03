import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {AppHeader, AppSpinner} from '../app/components'
import {
  APP_UNSET_TARGET_ROUTE
} from '../app/AppActionTypes'

class Dashboard extends React.Component {

  componentWillMount = () => {
    if (this.props.redirectTo !== null) {
      this.props.router.replace(this.props.redirectTo)
      this.props.dispatch({type: APP_UNSET_TARGET_ROUTE})
    }
    else {

    }
  }

  render() {

    if (this.props.authenticated === false) {
      return null
    }

    return (
      <div>
        <AppHeader title="User dashboard"/>

        <p>Hello, {this.props.username}!</p>

        <p>Welcome on board! At the moment you can log out or visit the page of you personal user profile.</p>

        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {

  return {
    redirectTo: store.app.targetRoute,
    username: store.user.username,
    authenticated: store.user.authenticated,
  }
})(withRouter(Dashboard))