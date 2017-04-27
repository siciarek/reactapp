import React, {Component} from 'react'
import {connect} from 'react-redux'

import {List} from 'material-ui/List';
import ActionButton from "../app/ActionButton"

import ListItemIcon from 'material-ui/svg-icons/av/library-books'


import {fetchLyricsList} from './LyricsActions'
import {removeSong} from '../song/SongActions'
import Header from '../app/Header'
import Spinner from '../app/Spinner'
import AppListItem from '../app/AppListItem'

class LyricsList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchLyricsList())
  }

  render() {

    let items = (
      <div>
      </div>
    )

    if (this.props.items.length > 0) {
      const temp = this.props.items.map((item, index) => {
        const actions = {
          show: () => this.props.router.push(`/lyrics/${item.id}`),
          edit: () => this.props.router.push(`/song/${item.id}/edit`),
          remove: () => this.props.dispatch(removeSong(item.id)),
        }

        return <AppListItem
          key={index}
          leftIcon={<ListItemIcon />}
          primaryText={item.title}
          secondaryText={[item.genre, item.id, item.createdAt].join(' / ')}
          actions={actions}
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