import React from 'react'
import {AppSimpleList} from '../components'

class AppSimpleAutoloadingList extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {
    return <AppSimpleList {...this.props}/>
  }
}

export default AppSimpleAutoloadingList