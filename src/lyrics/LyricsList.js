import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router'
import {fetchLyricsList} from './LyricsActions'
import Header from '../app/Header'

import Spinner from '../app/Spinner'

import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import ListItemIcon from 'material-ui/svg-icons/av/library-books'
import ActionButton from "../app/ActionButton"
import IconButton from 'material-ui/IconButton';
import ShowIcon from 'material-ui/svg-icons/action/visibility'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'
import DeleteIcon from 'material-ui/svg-icons/action/delete'

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
          rightIconButton={
            <div>
              <IconButton tooltip="Show">
                <ShowIcon/>
              </IconButton>
              <IconButton tooltip="Edit" onTouchTap={(e) => {
                location.href = `/song/${item.id}/edit`
              }}>
                <EditIcon/>
              </IconButton>
              <IconButton tooltip="Delete" onTouchTap={() => {
                location.reload()
              }}>
                <DeleteIcon/>
              </IconButton>
            </div>}

          containerElement={<Link to={`/lyrics/${item.id}`}/>}
          key={item.id}
          primaryText={item.title}
          secondaryText={`${item.genre}/${item.id}/${item.createdAt}`}
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