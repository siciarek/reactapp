import React from 'react'
import {connect} from 'react-redux'
import {AppHeader,AppSpinner} from '../app/components'
import {fetchUserProfile} from './UserActions'
import ProfileForm from './ProfileForm'

class Profile extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchUserProfile())
  }

  render() {

    if(this.props.current.id === null) {
      return null
    }

    return (
      <div>
        <AppHeader title={`User #${this.props.current.id}`}/>
        <ProfileForm
          current={this.props.current}
          dispatch={this.props.dispatch}
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