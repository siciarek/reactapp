import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {List, ListItem} from 'material-ui/List'
import ListItemIcon from 'material-ui/svg-icons/action/theaters'

import {fetchVideoList} from './VideoActions'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import AppFloatingActionButton from '../app/components/AppFloatingActionButton'

class VideoList extends React.Component {

  title = 'Videos'
  itemRoute = 'video'

  componentWillMount() {
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
        <AppHeader title={this.title}/>
        {items}
        <AppFloatingActionButton route="/"/>
        <AppSpinner/>
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