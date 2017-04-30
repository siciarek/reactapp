import React from 'react'

import { connect } from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress'


class AppSpinner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {width: '0', height: '0' }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {

    const size = 60

    const style = {
      display: this.props.fetching === true ? 'block' : 'none',
      position: 'absolute',
      top: (this.state.height - size) / 2,
      left: (this.state.width - size) / 2,
    }

    return (
      <div className="spinner" style={style}>
        <CircularProgress size={size} color="#cacaca"/>
      </div>
    )
  }
}

export default connect((store) => {
  window.xstore = store
  const fetching = store.lyrics.fetching||store.artist.fetching||store.author.fetching
  return {
    fetching: fetching,
  }
})(AppSpinner)