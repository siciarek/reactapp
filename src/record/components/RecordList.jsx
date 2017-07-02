import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui/svg-icons/av/fiber-manual-record'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../../app/components'

class RecordList extends React.Component {

  componentWillMount() {
    this.props.fetchList()
  }

  render() {

    const {title, icon, items} = this.props

    if(items.map === undefined) {
      return null
    }

    return (
      <div>
        <AppHeader title={title}/>
        <AppFloatingActionButton route="/"/>
        <AppSpinner/>
        <List>
          {
            items.map(item => {
              return <ListItem
                key={item.id}
                leftIcon={icon}
                containerElement={<Link to={`/records/${item.id}`}/>}
                primaryText={`${item.title}/${item.artists.map(e => e.name).join(', ')}`}
                secondaryText={`number of tracks: ${item.tracks.length}`}
              />
            })
          }
        </List>
      </div>
    )
  }
}

RecordList.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  fetchList: PropTypes.func.isRequired,
}

RecordList.defaultProps = {
  title: 'Records',
  icon: <ListItemIcon/>,
  items: [],
  fetchList: () => [],
}

export default RecordList
