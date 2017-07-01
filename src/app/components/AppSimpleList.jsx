import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import ListItemIcon from 'material-ui/svg-icons/av/fiber-manual-record'
import {List, ListItem} from 'material-ui'
import {AppHeader, AppSpinner} from '../components'

const AppSimpleList = (props) => {
  return <div>
    <AppHeader title={props.title}/>
    <AppSpinner/>
    <List>
      {
        props.items.map(item => <ListItem
            key={item.id}
            primaryText={item.description}
            containerElement={<Link to={`artists/${item.id}`}/>}
            leftIcon={props.icon}
          />
        )
      }
    </List>
  </div>
}

AppSimpleList.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
}

AppSimpleList.defaultProps = {
  title: 'List',
  icon: <ListItemIcon/>,
  items: [],
}

export default AppSimpleList