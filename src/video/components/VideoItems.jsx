import React from 'react'
import PropTypes from 'prop-types'
import {List, ListItem, ListItemText, ListItemIcon} from 'material-ui'
import ItemIcon from 'material-ui-icons/VolumeUp'
import AppHeader from '../../app/components/AppHeader'
import AppSpinner from '../../app/components/AppSpinner'
import AppFloatingActionButton from '../../app/components/AppFloatingActionButton'

class VideoItems extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {items, router} = this.props

    if (!items) {
      return null
    }

    let title = undefined

    const listItems = items.map(item => {

      const {song, artists, description, id} = item

      title = item.song.title

      const performedBy = artists.map(artist => artist.name).join(', ')

      return <ListItem button classes={{}} key={id} onTouchTap={() => router.push(`/video/${song.id}/item/${id}`)}>
        <ListItemIcon classes={{}}><ItemIcon/></ListItemIcon>
        <ListItemText classes={{}} primary={performedBy} secondary={description}/>
      </ListItem>
    })

    return <div>
      <AppHeader title={title}/>
      <AppFloatingActionButton action={() => router.push('/videos')}/>
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
}

VideoItems.defaultProps = {
  items: [],
  init: () => {
  },
}

export default VideoItems
