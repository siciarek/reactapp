import React from 'react'
import PropTypes from 'prop-types'
import {AppSimpleList} from '../widgets'

class AppSimpleAutoloadingList extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {
    return <AppSimpleList {...this.props}/>
  }
}

AppSimpleAutoloadingList.props = {
  init: PropTypes.func.isRequired,
}

AppSimpleAutoloadingList.defaultProps = {
  init: () => {}
}

export default AppSimpleAutoloadingList