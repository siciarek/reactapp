import React from 'react'
import FontIcon from 'material-ui'
import {grey400} from 'material-ui/styles/colors'

const SystemPage = ({code, message, icon}) => {

    return <div className="system-page">
        <h1>{code}</h1>
        <h2>{message}</h2>
        <br/>
        <FontIcon
          style={{
            fontSize: '10em',
            color: grey400,
          }}
          className="material-icons"
        >{icon}</FontIcon>
      </div>
}

export default SystemPage