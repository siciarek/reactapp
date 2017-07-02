import React from 'react'
import PropTypes from 'prop-types'
import ListItemIcon from 'material-ui/svg-icons/av/fiber-manual-record'
import {List, ListItem} from 'material-ui'
import {AppHeader, AppSpinner} from '../components'

const AppSimpleList = ({title, icon, items, goTo}) => {

  return <div>
    <AppHeader title={title}/>
    <List>
      {
        items.map(item => <ListItem
            key={item.id}
            primaryText={item.description}
            onTouchTap={() => goTo(item.id)}
            leftIcon={icon}
          />
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
  icon: <ListItemIcon/>,
  items: [],
  goTo: id => console.log('Not implemented yet.'),
}

export default AppSimpleList