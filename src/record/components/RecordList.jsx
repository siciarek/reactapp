import React from 'react'
import PropTypes from 'prop-types'
import {List, ListItem, ListItemIcon, ListItemText} from 'material-ui'
import ItemIcon from 'material-ui-icons/DiscFull'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../../app/components'

class RecordList extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {title, icon, items, goto, router} = this.props

    if (!items) {
      return null
    }

    return (
      <div>
        <AppHeader title={title}/>
        <AppFloatingActionButton action={() => router.push('/')}/>
        <AppSpinner/>
        <List>
          {
            items.map(({id, title, artists, tracks, audioCount}) => <ListItem button classes={{}} key={id}
                                                                              onTouchTap={() => goto(id)}>
                <ListItemIcon classes={{}}>
                  {icon}
                </ListItemIcon>
                <ListItemText classes={{}} primary={`${title}/${artists.map(e => e.name).join(', ')}`}
                              secondary={`number of tracks: ${tracks.length}`}/>
              </ListItem>
            )
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
  init: PropTypes.func.isRequired,
}

RecordList.defaultProps = {
  title: 'Records',
  icon: <ItemIcon/>,
  items: [],
  init: () => [],
}

export default RecordList
