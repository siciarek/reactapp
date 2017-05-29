import React from 'react'
import {connect} from 'react-redux'
import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui/svg-icons/av/video-label'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../app/components'
import {fetchVideoItem} from './VideoActions'

class VideoItem extends React.Component {

  constructor(props) {
    super(props)
    this.props.dispatch(fetchVideoItem(this.props.params.id))
  }

  render() {

    let title = undefined;

    const temp = this.props.current.map((item) => {

      title = item.song.title

      const atemp = item.artists.map((artist) => {
        return artist.name;
      })

      return <ListItem
        leftIcon={<ListItemIcon />}
        key={item.id}
        primaryText={atemp.join(', ')}
        secondaryText={item.description}
        href={item.path}
      />
    })

    return (
      <div className="container">
        <AppHeader title={title}/>
        <List>
          {temp}
        </List>
        <AppFloatingActionButton route="/videos"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {

  return {
    fetching: store.video.fetching,
    current: store.video.current,
  }
})(VideoItem)