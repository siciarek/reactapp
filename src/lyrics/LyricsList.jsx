import React, {Component} from 'react'
import {connect} from 'react-redux'

import {List} from 'material-ui/List'
import AppFloatingActionButton from "../app/AppFloatingActionButton"

import ListItemIcon from 'material-ui/svg-icons/av/library-books'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

import {fetchLyricsList} from './LyricsActions'
import {removeSong} from '../song/SongActions'
import AppHeader from '../app/AppHeader'
import AppSpinner from '../app/AppSpinner'
import AppListItem from '../app/AppListItem'

class LyricsList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchLyricsList())
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  constructor(props, context) {
    super(props, context)

    this.state = {open: false, id: null}
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
          remove: () => {
            this.handleOpen()
            this.setState({id: item.id})
          }
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
        <AppHeader title="Lyrics"/>
        {items}
        <AppFloatingActionButton icon="add" route="/song/add"/>
        <AppSpinner/>

        <Dialog
          title="Confirmation"
          actions={[
            <FlatButton
              label="No"
              onTouchTap={this.handleClose}
            />,
            <FlatButton
              label="Yes"
              onTouchTap={() => this.props.dispatch(removeSong(this.state.id))}
            />,
          ]}
          modal={true}
          open={this.state.open}
        >
          Are you sure you want to remove it?
        </Dialog>
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