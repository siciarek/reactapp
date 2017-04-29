import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {authCheck} from './UserActions';

export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    constructor(props) {
      super(props)
      this.props.dispatch(authCheck())
    }

    componentWillMount() {
      console.log(['FIRST', this.props.authenticated])

      if (!this.props.authenticated) {
        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      console.log(['SECOND', nextProps.authenticated])
      if (!nextProps.authenticated) {
        this.context.router.push('/login');
      }
    }

    render() {
      console.log(['THIRD', this.props.authenticated])
      return <ComposedComponent {...this.props} />
    }
  }

  return connect((store) => {
    return {
      authenticated: store.user.authenticated,
    }
  })(Authentication)
}