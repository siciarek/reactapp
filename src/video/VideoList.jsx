import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {List, ListItem} from 'material-ui/List'
import ListItemIcon from 'material-ui/svg-icons/action/theaters'

import {fetchVideoList} from './VideoActions'
import Header from '../app/Header'
import Spinner from '../app/Spinner'
import AppFloatingActionButton from '../app/AppFloatingActionButton'

class VideoList extends React.Component {

  title = 'Videos'
  itemRoute = 'video'

  componentDidMount() {
    this.props.dispatch(fetchVideoList())
  }

  render() {

    const temp = this.props.items.map((item) => {
      return <ListItem
        leftIcon={<ListItemIcon />}
        containerElement={<Link to={`${this.itemRoute}/${item.id}`}/>}
        key={item.id}
        primaryText={item.title}
        secondaryText={`results: ${item.videos.length}`}
      />
    })

    const items = (
      <List>
        {temp}
      </List>
    )

    return (
      <div className="container">
        <Header title={this.title}/>
        {items}
        <AppFloatingActionButton route="/"/>
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
})(VideoList)