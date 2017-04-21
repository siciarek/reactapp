import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router'
import Header from '../app/Header'

import Spinner from '../app/Spinner'

import {List, ListItem} from 'material-ui/List';

import {fetchVideoList} from './VideoActions'
import ListItemIcon from 'material-ui/svg-icons/av/video-label'
import OpenMenuIcon from 'material-ui/svg-icons/action/view-list';
import FloatingActionButton from 'material-ui/FloatingActionButton';

class VideoList extends React.Component {

  title = 'Videos'
  itemRoute = 'video'

  componentDidMount() {
    this.props.dispatch(fetchVideoList())
  }

  render() {

    let items = (
      <div>
      </div>
    )

    if (this.props.items.length > 0) {
      const temp = this.props.items.map((item) => {
        return <ListItem
          leftIcon={<ListItemIcon />}
          containerElement={<Link to={`${this.itemRoute}/${item.id}`}/>}
          key={item.id}
          primaryText={item.title}
          secondaryText={`results: ${item.videos.length}`}
        />
      })

      items = (
        <List>
          {temp}
        </List>
      )
    }

    return (
      <div className="container">
        <Header title={this.title}/>
        {items}
        <FloatingActionButton
          className="button-fixed-bottom-right" onTouchTap={() => this.props.router.push('/')}>
          <OpenMenuIcon />
        </FloatingActionButton>
        <Spinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.video.fetching,
    items: store.video.items,
  }
})(VideoList);