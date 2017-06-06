import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import {grey400} from 'material-ui/styles/colors'

function SystemPage(props) {

    return <div className="system-page">
        <h1>{props.code}</h1>
        <h2>{props.message}</h2>
        <br/>
        <FontIcon
          style={{
            fontSize: '10em',
            color: grey400,
          }}
          className="material-icons"
        >{props.icon}</FontIcon>
      </div>
}

export default SystemPage