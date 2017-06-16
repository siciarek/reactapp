import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {RaisedButton, FontIcon} from 'material-ui'
import {AppHeader} from '../app/components'
import {
  APP_UNSET_TARGET_ROUTE
} from '../app/AppActionTypes'
import {
  fetchUserProfile
} from './UserActions'

class Dashboard extends React.Component {

  componentWillMount = () => {
    if (this.props.redirectTo !== null) {
      this.props.router.replace(this.props.redirectTo)
      this.props.dispatch({type: APP_UNSET_TARGET_ROUTE})
    }
    else {
      this.props.dispatch(fetchUserProfile())
    }
  }

  render() {

    if (!this.props.user.username) {
      return null
    }

    const user = {...this.props.user}

    return (
      <div>
        <AppHeader title={`User #${user.id} dashboard`}/>

        <h3>Hello, {user.firstName}!</h3>

        <p>Welcome on board! At the moment you can log out or visit your personal user profile page.</p>

        <h3>Your profile data</h3>

        <ul>
          {
            Object.entries(user).filter(([key, val]) => {
              return false === ['error', 'message', 'authenticated'].includes(key)
            }).map((entry, index) => {
              const [key, value] = entry
              return <li key={index}>{key}: <em>{`${value}`}</em></li>
            })
          }
        </ul>

        <br/>

        <RaisedButton
          primary={true}
          label="Profile"
          labelPosition="before"
          icon={<FontIcon className="material-icons">power_settings_new</FontIcon>}
          onTouchTap={() => this.props.router.push('/profile')}
        />

      </div>
    )
  }
}

export default connect((store) => {

  return {
    redirectTo: store.app.targetRoute,
    user: store.user,
    authenticated: store.user.authenticated,
  }
})(withRouter(Dashboard))