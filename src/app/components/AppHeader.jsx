import React from 'react'
import PropTypes from 'prop-types'
import './AppHeader.css'

class AppHeader extends React.Component {
  render() {
    return (
      <h2 className="page-header">
        {this.props.title}
      </h2>
    )
  }
}

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

AppHeader.defaultProps = {
  title: '…',
}

export default AppHeader