import React from 'react'
import {connect} from 'react-redux'
import {unauthenticateUser} from './UserActions'

class Logout extends React.Component {
  componentWillMount() {
    this.props.dispatch(unauthenticateUser())
  }

  render() {
    return null
  }
}

export default connect((store) => {
  return {

  }
})(Logout)