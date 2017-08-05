import React from 'react'
import PropTypes from 'prop-types'
import {AppSimpleItem} from '../../app/components'

class AppSimpleAutoloadingItem extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {
    return <AppSimpleItem {...{...this.props.content, returnRoute: this.props.returnRoute}}/>
  }
}

AppSimpleAutoloadingItem.props = {
  init: PropTypes.func.isRequired,
}

AppSimpleAutoloadingItem.defaultProps = {
  init: () => {}
}

export default AppSimpleAutoloadingItem