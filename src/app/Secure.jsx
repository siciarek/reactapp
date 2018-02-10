import React from 'react'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {APP_ERROR_OCCURRED} from './AppActionTypes'

const redirectRoute = '/login'

const error = {
  code: 401,
  message: 'Bad credentials'
}

export default Component => {

  class Secure extends React.Component {

    componentWillMount() {
      if (this.props.granted === false) {
        this.props.dispatch({type: APP_ERROR_OCCURRED, payload: error})
        this.props.router.push(redirectRoute)
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.granted === false) {
        this.props.dispatch({type: APP_ERROR_OCCURRED, payload: error})
        this.props.router.push(redirectRoute)
      }
    }

    render() {
      return <Component {...this.props}/>
    }
  }

  const mapStateToProps = state => ({
    granted: state.user.authenticated,
  })

  return connect(mapStateToProps)(Secure)
}