import React from 'react'

import { connect } from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress'


class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {

    const style = {
      display: this.props.fetching === true ? 'block' : 'none',
      position: 'absolute',
      top: this.state.height / 2 - 40,
      left: this.state.width / 2 - 40,
    }

    return (
      <div className="spinner" style={style}>
        <CircularProgress size={80} thickness={10} color="#cacaca"/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: (store.lyrics.fetching),
  }
})(Spinner);