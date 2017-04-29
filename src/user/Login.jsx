import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authenticateUser} from './UserActions';

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import Snackbar from 'material-ui/Snackbar'

import Header from '../app/Header'

const initialState = {
  username: '',
  password: '',
}

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {...initialState}
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
        <Header title="Log in"/>

        <Snackbar
          open={this.props.errorMessage !== ''}
          message={this.props.errorMessage}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />

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
            icon={<FontIcon className="material-icons">lock_open</FontIcon>}
            onTouchTap={this.submit}
          />

        </form>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    errorMessage: store.user.error,
    message: store.user.message,
    authenticated: store.user.authenticated,
  }
})(Login)
