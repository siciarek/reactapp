import React, {Component} from 'react'
import SystemPage from './SystemPage'

export default class AccessForbiden extends Component {

  render() {
    return (
      <SystemPage code="403" message="Access forbiden" icon="pan_tool"/>
    )
  }
}
