import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import config from '../config'
import AppAppBar from './AppAppBar'
import AppDrawer from './AppDrawer'
import AppNotification from './AppNotification'
import '../App.css'

class App extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {children} = this.props

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
}

App.propTypes = {
  children: PropTypes.any,
  init: PropTypes.func.isRequired,
}

App.defaultProps = {
  children: null,
  init: () => {},
}

export default App