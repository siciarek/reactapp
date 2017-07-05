import React from 'react'
import SystemPage from './SystemPage'
import Icon from 'material-ui-icons/ErrorOutline'

const PageNotFound = () => <SystemPage
  code="404"
  message="Page not found"
  icon={<Icon style={{width: '10em', height: '10em', color: 'silver',}}/>}
/>

export default PageNotFound