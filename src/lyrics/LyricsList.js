import React from 'react'
import {connect} from 'react-redux'

import {fetchLyricsList} from './LyricsActions'
import Header from '../app/Header'

import Spinner from '../app/Spinner'
import {removeSong} from '../song/SongActions'

import {List, ListItem} from 'material-ui/List';
import ListItemIcon from 'material-ui/svg-icons/av/library-books'
import ActionButton from "../app/ActionButton"
import IconButton from 'material-ui/IconButton';
import ShowIcon from 'material-ui/svg-icons/action/visibility'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'
import RemoveIcon from 'material-ui/svg-icons/action/delete'

class LyricsList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchLyricsList())
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
          key={item.id}
          primaryText={item.title}
          secondaryText={`${item.genre}/${item.id}/${item.createdAt}`}
          rightIconButton={
            <div>
              <IconButton tooltip="Show" onTouchTap={() => {
                this.props.router.push(`/lyrics/${item.id}`)
              }}>
                <ShowIcon/>
              </IconButton>
              < IconButton tooltip="Edit" onTouchTap={() => {
                this.props.router.push(`/song/${item.id}/edit`)
              }}>
                <EditIcon/>
              </IconButton>
              <IconButton tooltip="Remove" onTouchTap={() => {
                this.props.dispatch(removeSong(item.id))
              }}>
                <RemoveIcon/>
              </IconButton>
            </div>
          }
        />
      })

      items = (
        <List>{temp}</List>
      )
    }

    return (
      <div className="container">
        <Header title="Lyrics"/>
        {items}
        <ActionButton icon="add" route="/song/add"/>
        <Spinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.lyrics.fetching,
    items: store.lyrics.items,
  }
})(LyricsList)