import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const redirectRoute = '/login'

// TODO: send action with error

export default ComposedComponent => {

  class Secure extends React.Component {

    static contextTypes = {
      router: PropTypes.object.isRequired,
    }

    componentWillMount() {
      if(this.props.granted === false) {
        this.context.router.push(redirectRoute)
      }
    }

    componentWillUpdate(nextProps) {
      if(nextProps.granted === false) {
        this.context.router.push(redirectRoute)
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

  return connect(mapStateToProps)(Secure)
}