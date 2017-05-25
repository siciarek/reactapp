import React from 'react'
import {connect} from 'react-redux'
import {TextField, RaisedButton, FontIcon, Snackbar} from 'material-ui'
import {authenticateUser} from './UserActions'
import {AppHeader, AppSpinner} from '../app/components'

const INITIAL_STATE = {
  username: 'molak',
  password: 'pass',
}

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {...INITIAL_STATE}
  }

  updateValue = (event) => {
    const key = event.target.id
    const val = event.target.value

    let state = {}
    state[key] = val
    this.setState(state)
  }

  submit = () => {
    this.props.dispatch(authenticateUser(this.state))
  }

  render() {

    return (
      <div className="container">

        <AppHeader title="Log in"/>

        {/*<Snackbar*/}
          {/*open={this.props.errorMessage !== ''}*/}
          {/*message={this.props.errorMessage}*/}
          {/*autoHideDuration={4000}*/}
          {/*onRequestClose={this.handleRequestClose}*/}
        {/*/>*/}

        <form>

          <TextField
            id="username"
            type="text"
            value={this.state.username}
            floatingLabelText="Username"
            hintText="Insert username"
            onChange={this.updateValue}
          />

          <br/>

          <TextField
            id="password"
            type="password"
            value={this.state.password}
            floatingLabelText="Password"
            hintText="Insert password"
            onChange={this.updateValue}
          />

          <br/>
          <br/>

          <RaisedButton
            primary={true}
            label="Log In"
            labelPosition="before"
            icon={<FontIcon className="material-icons">power_settings_new</FontIcon>}
            onTouchTap={this.submit}
          />

        </form>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    errorMessage: store.user.error,
    message: store.user.message,
    authenticated: store.user.authenticated,
  }
})(Login)
