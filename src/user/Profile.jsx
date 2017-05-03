import React from 'react'
import {connect} from 'react-redux'
import AppHeader from '../app/AppHeader'
import {authCheck, updateUser, saveUser} from './UserActions'
import ProfileForm from './ProfileForm'

class Profile extends React.Component {

  constructor(params) {
    super(params)
    this.props.dispatch(authCheck())
  }

  removeEntity = (id) => {
    alert('Not implemented yet.')
    // this.props.dispatch(removeUser(id))
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
      return (
        <div>
        </div>
      )
    }

    return (
      <div className="container">
        <AppHeader title="User profile"/>
        <ProfileForm current={this.props.current} update={this.updateEntity} save={this.saveEntity} remove={this.removeEntity}/>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    current: store.user,
  }
})(Profile)