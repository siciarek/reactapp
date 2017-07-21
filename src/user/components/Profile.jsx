import React from 'react'
import {AppHeader, AppSpinner} from '../../app/components'
import ProfileForm from './ProfileForm'

class Profile extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    if (this.props.current.id === null) {
      return null
    }

    return <div>
      <AppHeader title={`User #${this.props.current.id} profile`}/>
      <ProfileForm
        current={this.props.current}
        dispatch={this.props.dispatch}
      />
      <AppSpinner/>
    </div>
  }
}

export default Profile