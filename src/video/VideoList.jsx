import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui/svg-icons/action/theaters'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../app/components'
import {fetchVideoList} from './VideoActions'

class VideoList extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchVideoList())
  }

  render() {

    return (
      <div>
        <AppHeader title="Video"/>
        <List>
          {
            this.props.items.map(item => {
              return <ListItem
                leftIcon={<ListItemIcon />}
                containerElement={<Link to={`/video/${item.id}`}/>}
                key={item.id}
                primaryText={item.title}
                secondaryText={`results: ${item.videoCount}`}
              />
            })
          }
        </List>
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