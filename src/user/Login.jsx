import React from 'react'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import LoginIcon from 'material-ui-icons/PowerSettingsNew'
import {authenticateUser} from './UserActions'
import {AppHeader, AppSpinner} from '../app/components'

const INITIAL_STATE = {
  username: 'colak',
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
      <div>

        <AppHeader title="Log in"/>

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

          <Button raised onTouchTap={this.submit}>
            <LoginIcon style={{marginRight: 12}}/>Log In
          </Button>

        </form>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    authenticated: store.user.authenticated,
  }
})(Login)
