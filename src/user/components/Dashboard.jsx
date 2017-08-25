import React from 'react'
import PropTypes from 'prop-types'
import {AppHeader, AppSpinner} from '../../app/widgets'
import {Button} from 'material-ui'
import {map} from 'lodash'

class Dashboard extends React.Component {

  componentWillMount = () => {
    this.props.init()
  }

  render() {

    const {item, router} = this.props

    if (!item.id) {
      return <AppSpinner/>
    }

    return <div>
      <AppHeader title={`User #${item.id} dashboard`}/>
      <br/>
      <h3>Hello, {item.firstName}!</h3>
      <p>Welcome on board! At the moment you can log out or visit your personal user profile page.</p>
      <h3>Your profile data</h3>
      <ul>
        {map(item, (value, key) => <li key={key}>{key}: <em>{value}</em></li>)}
      </ul>
      <br/>
      <Button raised onTouchTap={() => router.push('/profile')}>
        Profile
      </Button>
    </div>
  }
}

Dashboard.propTypes = {
  item: PropTypes.object.isRequired,
  init: PropTypes.func.isRequired,
}

Dashboard.defaultProps = {
  item: {},
  init: () => {
  },
}

export default Dashboard
