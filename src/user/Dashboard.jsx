import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {RaisedButton, FontIcon} from 'material-ui'
import {AppHeader, AppSpinner} from '../app/components'
import {
  APP_UNSET_TARGET_ROUTE
} from '../app/AppActionTypes'

class Dashboard extends React.Component {

  logOut = () => {
     this.props.router.push('/logout')
  }

  render() {

    if (this.props.authenticated === false) {
      return null
    }

    if(this.props.redirectTo !== null) {
      this.props.router.push(this.props.redirectTo)
      this.props.dispatch({type: APP_UNSET_TARGET_ROUTE})
      return null
    }

    return (
      <div className="container">
        <AppHeader title="User dashboard"/>

        <p>Hello, {`${this.props.firstName} ${this.props.lastName}`}!</p>


        <p><em>{`${this.props.dateOfBirth}`}</em></p>
        <p><em>{`${this.props.email}`}</em></p>

        <br/>

        <p>Welcome on board! At the moment you can log out or visit the page of you personal user profile.</p>

        <br/>

        <RaisedButton
          primary={true}
          label="Log Out"
          labelPosition="before"
          icon={<FontIcon className="material-icons">power_settings_new</FontIcon>}
          onTouchTap={this.logOut}
        />

        {' '}

        <RaisedButton
          primary={true}
          label="Profile"
          labelPosition="before"
          icon={<FontIcon className="material-icons">account_circle</FontIcon>}
          onTouchTap={() => this.props.router.push('/profile')}
        />

        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {

  return {
    redirectTo: store.app.targetRoute,
    dateOfBirth: store.user.dateOfBirth,
    firstName: store.user.firstName,
    lastName: store.user.lastName,
    email: store.user.email,
    authenticated: store.user.authenticated,
  }
})(withRouter(Dashboard))