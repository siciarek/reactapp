import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import config from '../config'
import AppAppBar from './AppAppBar'
import AppDrawer from './AppDrawer'
import AppNotification from './AppNotification'
import '../App.css'

const App = ({children}) => {

  return <div>
    <Helmet>
      <title>{config.appName}</title>
    </Helmet>
    <AppDrawer/>
    <AppAppBar title={config.appName}/>
    {children}
    <AppNotification/>
  </div>
}

App.propTypes = {
  children: PropTypes.any,
}

App.defaultProps = {
  children: null,
}

export default App