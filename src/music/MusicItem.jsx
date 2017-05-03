import React from 'react'
import {connect} from 'react-redux'

import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui/svg-icons/av/volume-up'

import {fetchMusicItem} from './MusicActions'
import AppHeader from '../app/AppHeader'
import AppSpinner from '../app/AppSpinner'
import AppFloatingActionButton from '../app/AppFloatingActionButton'

class MusicItem extends React.Component {

  listRoute = '/music'

  constructor(props) {
    super(props)
    this.props.dispatch(fetchMusicItem(this.props.params.id))
  }

  render() {

    if(typeof this.props.current.music === 'undefined') {
      return false
    }

    const temp = this.props.current.music.map((item) => {
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
        <AppHeader title={this.props.current.title} />
        {items}
        <AppFloatingActionButton route="/music"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {

  return {
    fetching: store.music.fetching,
    current: store.music.current,
  }
})(MusicItem)