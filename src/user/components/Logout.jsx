import React from 'react'
import PropTypes from 'prop-types'

class Logout extends React.Component {

  componentWillMount() {
    this.props.unauthenticate()
  }

  render() {
    return null
  }
}

Logout.propTypes = {
  unauthenticate: PropTypes.func.isRequired,
}

Logout.defaultProps = {
  unauthenticate: () => {},
}

export default Logout