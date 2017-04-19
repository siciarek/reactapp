import React from 'react'
import config from '../config'

class Home extends React.Component {

  render() {

    return (
      <div className="jumbotron">
        <h1>
          <i className="fa-bullseye fa">
          </i>
          &nbsp;
          {config.appName}
        </h1>
        <br/>
        <p>{config.appDescription}</p>
        <br/>
      </div>
    )
  }
}

export default Home
