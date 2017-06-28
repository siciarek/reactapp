import React from 'react'
import PropTypes from 'prop-types'
import './AppHeader.css'

const AppHeader = ({title}) => <h2 className="page-header">{title}</h2>

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

AppHeader.defaultProps = {
  title: '…',
}

export default AppHeader