import React from 'react'
import {connect} from 'react-redux'
import {CircularProgress} from 'material-ui'

class AppSpinner extends React.Component {

  constructor(props) {
    super(props)
    this.state = {size: 60, width: 0, height: 0}
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight})
  }

  render() {

    const {size, width, height} = this.state

    const style = {
      display: this.props.show === true ? 'block' : 'none',
      position: 'absolute',
      left: (width - size) / 2,
      top: (height - size) / 2,
    }

    return (
      <div style={style}>
        <CircularProgress size={size}/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    show: store.app.processing,
  }
})(AppSpinner)