import React from 'react'

import { connect } from 'react-redux'
import './Spinner.css'

class Spinner extends React.Component {

  render() {

    const style = {
      display: this.props.fetching === true ? 'block' : 'none',
    }

    return (
      <div className="spinner modal-backdrop fade in" style={style}>
        <i className="fa fa-spinner fa-spin">
        </i>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: (store.user.fetching || store.tweets.fetching),
  }
})(Spinner);