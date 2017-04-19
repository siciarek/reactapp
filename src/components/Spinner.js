import React from 'react'

import { connect } from 'react-redux'
import './Spinner.css'

class Spinner extends React.Component {

  render() {

    const show = this.props.fetching

    const spinnerClassName = 'spinner modal-backdrop fade in';
    let className = spinnerClassName + ' hidden'

    if(show === true) {
      className = spinnerClassName
    }

    return (
      <div className={className}>
        <i className="fa fa-spinner fa-spin"></i>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.user.fetching
  }
})(Spinner);