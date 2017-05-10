import React from 'react'
import {connect} from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'

import {AppHeader, AppSpinner} from '../app/components'
import {authCheck, unauthenticateUser} from './UserActions'

class Dashboard extends React.Component {

  constructor(params) {
    super(params)
    this.props.dispatch(authCheck())
  }

  logOut = () => {
    this.props.dispatch(unauthenticateUser())
  }

  render() {

    if (this.props.authenticated === false) {
      return (
        <div>
        </div>
      )
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
    dateOfBirth: store.user.dateOfBirth,
    firstName: store.user.firstName,
    lastName: store.user.lastName,
    email: store.user.email,
    authenticated: store.user.authenticated,
  }
})(Dashboard)