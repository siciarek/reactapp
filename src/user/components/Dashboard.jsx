import React from 'react'
import DashboardComponent from './DashboardComponent'

class Dashboard extends React.Component {

  componentWillMount = () => {
    this.props.init()
  }

  render() {

    return <DashboardComponent {...this.props}/>
  }
}

export default Dashboard
