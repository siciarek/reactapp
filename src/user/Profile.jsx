import React from 'react'
import {connect} from 'react-redux'
import {AppHeader,AppSpinner} from '../app/components'
import {authCheck, updateUser, saveUser} from './UserActions'
import ProfileForm from './ProfileForm'

class Profile extends React.Component {

  removeEntity = (id) => {
    alert('Not implemented yet.')
  }

  updateEntity = (key, value) => {
    this.props.dispatch(updateUser({...this.props.current, [key]: value}))
  }

  saveEntity = () => {
    let state = {...this.props.current}
    this.props.dispatch(saveUser(state))
  }

  render() {

    if (this.props.authenticated === false) {
      return null
    }

    return (
      <div>
        <AppHeader title="User profile"/>
        <ProfileForm
          current={this.props.current}
          update={this.updateEntity}
          save={this.saveEntity}
          remove={this.removeEntity}
        />
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    current: store.user,
  }
})(Profile)