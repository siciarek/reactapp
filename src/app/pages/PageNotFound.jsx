import React, {Component} from 'react'
import SystemPage from './SystemPage'

export default class PageNotFound extends Component {

  render() {
    return (
      <SystemPage code="404" message="Page not found" icon="error_outline"/>
    )
  }
}
