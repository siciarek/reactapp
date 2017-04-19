import React from 'react'
import MainMenu from "./Menu";
import Spinner from './Spinner'

class App extends React.Component {

  render() {

    return (
      <div>
        <MainMenu/>
        <div className={"container"}>
          {this.props.children}
        </div>
        <Spinner/>
      </div>
    )
  }
}

export default App