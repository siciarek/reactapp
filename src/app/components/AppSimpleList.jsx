import React from 'react'
import PropTypes from 'prop-types'
import DefaultListItemIcon from 'material-ui-icons/FiberManualRecord'
import List, {ListItem, ListItemText, ListItemIcon} from 'material-ui/List'
import {AppHeader, AppSpinner} from '../components'

const AppSimpleList = ({title, icon, items, goTo}) => {

  return <div>
    <AppHeader title={title}/>
    <List classes={{}}>
      {
        items.map(item => <ListItem classes={{}} key={item.id} onTouchTap={() => goTo(item.id)}>
            <ListItemIcon classes={{}}>{icon}</ListItemIcon>
            <ListItemText classes={{}} primary={item.description}/>
          </ListItem>
        )
      }
    </List>
  </div>
}

AppSimpleList.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  goTo: PropTypes.func.isRequired,
}

AppSimpleList.defaultProps = {
  title: 'List',
  icon: <DefaultListItemIcon/>,
  items: [],
  goTo: id => console.log('Not implemented yet.'),
}

export default AppSimpleList