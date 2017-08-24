import React from 'react'
import PropTypes from 'prop-types'
import {AppHeader, AppSpinner} from '../../app/widgets'
import ProfileForm from './ProfileForm'

class Profile extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {item, submit} = this.props

    if (item.id === null) {
      return null
    }

    return <div>
      <AppHeader title={`User #${item.id} profile`}/>
      <AppSpinner/>
      <br/>
      <ProfileForm
        onSubmit={submit}
        initialValues={item}
      />
    </div>
  }
}

Profile.propTypes = {
  item: PropTypes.object.isRequired,
  init: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
}

Profile.defaultProps = {
  item: {},
  init: () => {},
  submit: () => {},
}

export default Profile