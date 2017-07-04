import React from 'react'
import {connect} from 'react-redux'
import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui-icons/VideoLabel'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../app/components'
import {fetchVideoItem} from './VideoActions'

class VideoItem extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchVideoItem(this.props.params.id))
  }

  render() {

    let title = undefined

    const items = this.props.current.map(item => {

      title = item.song.title

      return <ListItem
        leftIcon={<ListItemIcon />}
        key={item.id}
        primaryText={item.artists.map(artist => {return artist.name}).join(', ')}
        secondaryText={item.description}
        href={item.path}
      />
    })

    return (
      <div>
        <AppHeader title={title}/>
        <List>
          {items}
        </List>
        <AppFloatingActionButton route="/videos"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {

  return {
    current: store.video.current,
  }
})(VideoItem)