import React from 'react'
import {connect} from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'

import AppHeader from '../app/AppHeader'
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
        <div className="container">
        </div>
      )
    }

    return (
      <div className="container">
        <AppHeader title="User dashboard"/>

        <p>Hello, {`${this.props.firstName} ${this.props.lastName}`}!</p>

        <p>Welcome on board!</p>

        <br/>

        <p><em>{`${this.props.email}`}</em></p>

        <br/>

        <RaisedButton
          primary={true}
          label="Log Out"
          labelPosition="before"
          icon={<FontIcon className="material-icons">power_settings_new</FontIcon>}
          onTouchTap={this.logOut}
        />
      </div>
    )
  }
}

export default connect((store) => {

  return {
    firstName: store.user.firstName,
    lastName: store.user.lastName,
    email: store.user.email,
    authenticated: store.user.authenticated,
  }
})(Dashboard)