import React from 'react'
import config from '../config'

class Home extends React.Component {

  render() {

    return (
      <div>
        <h1>
          {config.appName}
        </h1>
        <p>{config.appDescription}</p>
      </div>
    )
  }
}

export default Home
