import React from 'react'
import PropTypes from 'prop-types'
import './AppHeader.css'

export default function AppHeader(props) {
  return (
    <h2 className="page-header">
      {props.title}
    </h2>
  )
}

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

AppHeader.defaultProps = {
  title: '…',
}
