import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import ListItemIcon from 'material-ui/svg-icons/av/fiber-manual-record'
import {List, ListItem} from 'material-ui'
import {AppHeader, AppSpinner} from '../components'

class AppSimpleComponentList extends React.Component {

  componentWillMount() {
    this.props.fetchList()
  }

  render() {

    const {title, items, icon} = this.props

    return <div>
      <AppHeader title={title}/>
      <AppSpinner/>
      <List>
        {
          items.map(item => <ListItem
              key={item.id}
              primaryText={item.description}
              containerElement={<Link to={`/artists/${item.id}`}/>}
              leftIcon={icon}
            />
          )
        }
      </List>
    </div>
  }
}

AppSimpleComponentList.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
}

AppSimpleComponentList.defaultProps = {
  title: 'List',
  icon: <ListItemIcon/>,
  items: [],
}

export default AppSimpleComponentList