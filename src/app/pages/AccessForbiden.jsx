import React from 'react'
import SystemPage from './SystemPage'
import Icon from 'material-ui-icons/PanTool'

const AccessForbiden = () => <SystemPage
  code="403"
  message="Access forbiden"
  icon={<Icon style={{width: '10em', height: '10em', color: 'silver',}}/>}
/>

export default AccessForbiden