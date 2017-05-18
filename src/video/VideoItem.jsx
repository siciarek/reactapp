import React from 'react'
import {connect} from 'react-redux'

import {List, ListItem} from 'material-ui/List'
import ListItemIcon from 'material-ui/svg-icons/av/video-label'

import {fetchVideoItem} from './VideoActions'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import AppFloatingActionButton from '../app/components/AppFloatingActionButton'

class VideoItem extends React.Component {

  constructor(props) {
    super(props)
    this.props.dispatch(fetchVideoItem(this.props.params.id))
  }

  render() {

    if (typeof this.props.current === 'undefined') {
      return false

    }

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

    let items = (
      <List>
        {temp}
      </List>
    )

    return (
      <div className="container">
        <AppHeader title={title}/>
        {items}
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