import React from 'react'
import PropTypes from 'prop-types'
import DashboardComponent from './DashboardComponent'

class Dashboard extends React.Component {

  componentWillMount = () => {
    this.props.init()
  }

  render() {

    return <DashboardComponent {...this.props}/>
  }
}

Dashboard.propTypes = {
  init: PropTypes.func.isRequired,
}

Dashboard.defaultProps = {
  init: () => {}
}

export default Dashboard
