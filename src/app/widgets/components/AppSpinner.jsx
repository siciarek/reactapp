import React from 'react'
import PropTypes from 'prop-types'
import {CircularProgress} from 'material-ui/Progress'

class AppSpinner extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  render() {

    const {width, height} = this.state
    const {show, size} = this.props
    const style = {
      position: 'absolute',
      display: show === true ? 'block' : 'none',
      left: (width - size) / 2,
      top: (height - size) / 2,
    }

    return <div style={style}><CircularProgress classes={{}} size={size}/></div>
  }
}

AppSpinner.propTypes = {
  size: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
}

AppSpinner.defaultProps = {
  size: 60,
  show: false,
}

export default AppSpinner