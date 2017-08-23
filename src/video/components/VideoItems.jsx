import React from 'react'
import PropTypes from 'prop-types'
import {List, ListItem, ListItemText, ListItemIcon} from 'material-ui'
import ItemIcon from 'material-ui-icons/VolumeDown'
import AppHeader from '../../app/components/AppHeader'
import AppSpinner from '../../app/components/AppSpinner'
import AppFloatingActionButton from '../../app/components/AppFloatingActionButton'

class VideoItems extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {items, icon, router} = this.props

    if (!items) {
      return null
    }

    let title = undefined

    const listItems = items.map(item => {

      const {song, artists, description, id} = item

      title = item.song.title

      const performedBy = artists.map(artist => artist.name).join(', ')

      return <ListItem button classes={{}} key={id} onTouchTap={() => router.push(`/video/${song.id}/item/${id}`)}>
        <ListItemIcon classes={{}}>{icon}</ListItemIcon>
        <ListItemText classes={{}} primary={performedBy} secondary={description}/>
      </ListItem>
    })

    return <div>
      <AppHeader title={title}/>
      <AppFloatingActionButton action={() => router.push('/video')}/>
      <AppSpinner/>
      <List>
        {listItems}
      </List>
    </div>
  }
}

VideoItems.propTypes = {
  items: PropTypes.array.isRequired,
  init: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
}

VideoItems.defaultProps = {
  items: [],
  init: () => {
  },
  icon: <ItemIcon/>,
}

export default VideoItems
