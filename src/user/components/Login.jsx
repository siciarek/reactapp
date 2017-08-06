import React from 'react'
import PropTypes from 'prop-types'
import {AppHeader, AppSpinner} from '../../app/components'
import LoginForm from './LoginForm'
import {ENV_PROD} from '../../app/config'

const Login = ({title, onSubmit, initialValues}) => {

  return <div>
    <AppHeader title={title}/>
    <AppSpinner/>
    <LoginForm onSubmit={onSubmit} initialValues={initialValues}/>
  </div>
}

Login.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  })
}

Login.defaultProps = {
  title: 'Log In',
  onSubmit: (data) => console.log(JSON.strigify(data)),
  initialValues: {
    username: (process.env.NODE_ENV === ENV_PROD ? '' : 'molak'),
    password: (process.env.NODE_ENV === ENV_PROD ? '' : 'pass'),
  }
}

export default Login