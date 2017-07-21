import React from 'react'

class Logout extends React.Component {

  componentWillMount() {
    this.props.unauthenticate()
  }

  render() {
    return null
  }
}

export default Logout