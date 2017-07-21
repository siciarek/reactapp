import React from 'react'
import {AppHeader, AppSpinner} from '../../app/components'
import LoginForm from './LoginForm'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = props.initialState
  }

  submit = () => {
    this.props.authenticate(this.state)
  }

  render() {

    const {title, authenticate} = this.props

    return <div>
      <AppHeader title={title}/>
      <AppSpinner/>
      <LoginForm username={this.state.username}
                 password={this.state.password}
                 setValue={state => this.setState(state)}
                 submit={() => this.submit()}/>
    </div>
  }
}

export default Login