import React from 'react'
import PropTypes from 'prop-types'
import SystemPage from './SystemPage'

const AccessForbiden = ({code, message, icon}) => <SystemPage code={code} message={message} icon={icon}/>

AccessForbiden.defaultProps = {
  code: 403,
  message: 'Access forbiden',
  icon: 'pan_tool'
}

export default AccessForbiden