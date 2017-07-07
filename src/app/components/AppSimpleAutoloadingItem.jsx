import React from "react"
import {AppSimpleItem} from "../../app/components"

class AppSimpleAutoloadingItem extends React.Component {

  componentWillMount() {
    this.props.loadContent()
  }

  render() {
    return <AppSimpleItem {...{...this.props.content, returnRoute: this.props.returnRoute}}/>
  }
}

export default AppSimpleAutoloadingItem