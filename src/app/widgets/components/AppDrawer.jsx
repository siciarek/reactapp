import React from 'react'
import PropTypes from 'prop-types'
import {browserHistory as router} from 'react-router'
import {
  Toolbar,
  AppBar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui'
import Typography from 'material-ui/Typography';

import IconCheck from 'material-ui-icons/Check'
import IconLockOpen from 'material-ui-icons/LockOpen'
import IconPerson from 'material-ui-icons/Person'
import IconDashboard from 'material-ui-icons/Dashboard'
import IconAccountCircle from 'material-ui-icons/AccountCircle'
import IconPowerSettingsNew from 'material-ui-icons/PowerSettingsNew'
import IconHome from 'material-ui-icons/Home'
import IconFace from 'material-ui-icons/Face'
import IconMic from 'material-ui-icons/Mic'
import IconStars from 'material-ui-icons/Stars'
import IconLibraryBooks from 'material-ui-icons/LibraryBooks'
import IconVolumeUp from 'material-ui-icons/VolumeUp'
import IconTheaters from 'material-ui-icons/Theaters'
import IconDiscFull from 'material-ui-icons/DiscFull'

import config from '../../config'
import menu from '../../menu'

const icons = {
  check: <IconCheck/>,
  lock_open: <IconLockOpen/>,
  person: <IconPerson/>,
  dashboard: <IconDashboard/>,
  account_circle: <IconAccountCircle/>,
  power_settings_new: <IconPowerSettingsNew/>,
  home: <IconHome/>,
  face: <IconFace/>,
  mic: <IconMic/>,
  stars: <IconStars/>,
  library_books: <IconLibraryBooks/>,
  volume_up: <IconVolumeUp/>,
  theaters: <IconTheaters/>,
  disc_full: <IconDiscFull/>,
}

const AppDrawer = ({opened, authenticated, toggleVisibility}) => {

  const matchedRoute = router.getCurrentLocation().pathname

  const items = menu
  .filter(e => e === null || e.hasOwnProperty('private') === false || e.private === authenticated)
  .map((e, i) => {

    if (e === null) {
      return <Divider classes={{}} inset={false} key={i}/>
    }

    const nestedItems = e.hasOwnProperty('children') && e.children.length > 0
      ? e.children.map((ce, ci) => <ListItem style={{width: 250}} classes={{}} key={ci} button onTouchTap={() => {
            router.push(ce.route)
            toggleVisibility()
          }}>
            <ListItemIcon classes={{}}>
              {icons[ce.icon]}
            </ListItemIcon>
            <ListItemText classes={{}} primary={ce.label}/>
            {ce.route === matchedRoute ? <ListItemIcon classes={{}}><IconCheck/></ListItemIcon> : null}
          </ListItem>
      )
      : []

    return <ListItem button classes={{}}
                     style={{width: 250}}
                     key={i}
                     onTouchTap={() => {
                       router.push(e.route)
                       toggleVisibility()
                     }}>

      <ListItemIcon classes={{}}>
        {icons[e.icon]}
      </ListItemIcon>

      <ListItemText classes={{}} primary={e.label}/>

      {e.route === matchedRoute ? <ListItemIcon classes={{}}><IconCheck/></ListItemIcon> : null}

    </ListItem>
  })

  return <Drawer classes={{}} style={{width: 250}} open={opened} onRequestClose={() => toggleVisibility()}>
    <AppBar classes={{}} position="static" onTouchTap={() => toggleVisibility()}>
      <Toolbar>
        <Typography type="title" color="inherit">{config.appName}</Typography>
      </Toolbar>
    </AppBar>
    {items}
  </Drawer>
}

AppDrawer.propTypes = {
  opened: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
}

AppDrawer.defaultProps = {
  opened: false,
  authenticated: false,
  toggleVisibility: () => {}
}

export default AppDrawer