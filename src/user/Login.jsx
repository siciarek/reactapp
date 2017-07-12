import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {authenticateUser} from './UserActions'

// import React from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import {AppHeader, AppSpinner} from '../app/components'


class LoginComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = props.initialState
  }

  render() {

    const {title, authenticate} = this.props

    return <div>
      <AppHeader title={title}/>
      <AppSpinner/>
      <form>
        <TextField marginForm id="username" label="Username" type="text" value={this.state.username}
                   onChange={event => this.setState({[event.target.id]:event.target.value})}/>
        <br/>

        <TextField marginForm id="password" label="Password" type="password" value={this.state.password}
                   onChange={event => this.setState({[event.target.id]:event.target.value})}/>
        <br/>

        <Button raised onTouchTap={() => authenticate(this.state)}>Log In</Button>
      </form>
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'Log In',
    initialState: {
      username: 'colak',
      password: 'pass',
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    authenticate: bindActionCreators(authenticateUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
