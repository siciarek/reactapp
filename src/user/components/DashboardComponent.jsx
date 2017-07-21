import React from 'react'
import {AppHeader} from '../../app/components'
import Button from 'material-ui/Button'
import LoginIcon from 'material-ui-icons/PowerSettingsNew'

const DashboardComponent = ({user, router}) => {

  if (!user.username) {
    return null
  }

  return <div>
    <AppHeader title={`User #${user.id} dashboard`}/>

    <br/>

    <h3>Hello, {user.firstName}!</h3>

    <p>Welcome on board! At the moment you can log out or visit your personal user profile page.</p>

    <h3>Your profile data</h3>

    <ul>
      {
        Object.entries(user).filter(([key, val]) => {
          return false === ['error', 'message', 'authenticated'].includes(key)
        }).map((entry, index) => {
          const [key, value] = entry
          return <li key={index}>{key}: <em>{`${value}`}</em></li>
        })
      }
    </ul>

    <br/>

    <Button raised onTouchTap={() => router.push('/profile')}>
      <LoginIcon style={{marginRight: 12}}/>
      Profile
    </Button>

  </div>
}

export default DashboardComponent