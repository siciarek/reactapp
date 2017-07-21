import React from 'react'

class LogoutComponent extends React.Component {

  componentWillMount() {
    this.props.unauthenticate()
  }

  render() {
    return null
  }
}

export default LogoutComponent