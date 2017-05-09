import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui/svg-icons/av/volume-up'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import {fetchMusicList} from './MusicActions'
import AppFloatingActionButton from '../app/components/AppFloatingActionButton'

class MusicList extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchMusicList())
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
          containerElement={<Link to={`music/${item.id}`}/>}
          key={item.id}
          primaryText={item.title}
          secondaryText={`results: ${item.music.length}`}
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
        <AppHeader title="Music"/>
        {items}
        <AppFloatingActionButton route="/"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.music.fetching,
    items: store.music.items,
  }
})(MusicList)