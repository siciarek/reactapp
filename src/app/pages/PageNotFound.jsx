import React from 'react'
import SystemPage from './SystemPage'
import Icon from 'material-ui-icons/ErrorOutline'
import {grey400} from 'material-ui/styles/colors'

const PageNotFound = () => <SystemPage
  code="404"
  message="Page not found"
  icon={<Icon style={{
    fontSize: '10em',
    color: grey400,
  }}/>}/>

export default PageNotFound