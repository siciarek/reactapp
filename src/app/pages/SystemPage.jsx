import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import {grey400} from 'material-ui/styles/colors'

export default class AccessForbiden extends React.Component {

  render() {
    return (
      <div className="container system-page">
        <h1>{this.props.code}</h1>
        <h2>{this.props.message}</h2>
        <br/>
        <FontIcon
          style={{
            fontSize: '10em',
            color: grey400,
          }}
          className="material-icons"
        >{this.props.icon}</FontIcon>
      </div>
    )
  }
}
