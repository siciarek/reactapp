import React from 'react'
import {connect} from 'react-redux'

import {List, ListItem} from 'material-ui/List';
import ListItemIcon from 'material-ui/svg-icons/av/video-label'

import {fetchVideoItem} from './VideoActions'
import Header from '../app/Header'
import Spinner from '../app/Spinner'
import AppFloatingActionButton from '../app/AppFloatingActionButton'

class VideoItem extends React.Component {

  constructor(props) {
    super(props);
    this.props.dispatch(fetchVideoItem(this.props.params.id))
  }

  render() {

    if(typeof this.props.current.videos === 'undefined') {
      return false
    }

    const temp = this.props.current.videos.map((item) => {
      return <ListItem
        leftIcon={<ListItemIcon />}
        key={item.id}
        primaryText={item.artist}
        secondaryText={item.info}
        href={item.url}
      />
    })

    let items = (
      <List>
        {temp}
      </List>
    )

    return (
      <div className="container">
        <Header title={this.props.current.title} />
        {items}
        <AppFloatingActionButton route="/videos"/>
        <Spinner/>
      </div>
    )
  }
}

export default connect((store) => {
  window.xstore = store
  return {
    fetching: store.video.fetching,
    current: store.video.current,
  }
})(VideoItem);