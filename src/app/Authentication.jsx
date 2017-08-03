import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default ComposedComponent => {

  class Authentication extends React.Component {

    static contextTypes = {
      router: PropTypes.object.isRequired,
    }

    componentWillMount() {
      if(this.props.granted === false) {
        this.context.router.push(('/'))
      }
    }

    componentWillUpdate(nextProps) {
      if(nextProps.granted === false) {
        this.context.router.push(('/'))
      }
    }

    render() {
      return <ComposedComponent {...this.props}/>
    }
  }

  const mapStateToProps = (state) => {
    return {
     granted: state.user.authenticated,
    }
  }

  return connect(mapStateToProps)(Authentication)
}