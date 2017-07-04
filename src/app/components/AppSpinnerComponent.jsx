import React from 'react'
import PropTypes from 'prop-types'
import {CircularProgress} from 'material-ui/Progress'

class AppSpinnerComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  render() {

    const {width, height} = this.state

    let props = {...this.props}

    Object.keys(AppSpinnerComponent.propTypes).map((key) => {
      return delete(props[key])
    })

    const {size} = props

    const style = {
      display: this.props.show === true ? 'block' : 'none',
      position: 'absolute',
      left: (width - size) / 2,
      top: (height - size) / 2,
    }

    return <div style={style}>
      <CircularProgress classes={{}} {...props}/>
    </div>
  }
}

AppSpinnerComponent.propTypes = {
  show: PropTypes.bool.isRequired,
}

AppSpinnerComponent.defaultProps = {
  size: 60,
  show: false,
}

export default AppSpinnerComponent