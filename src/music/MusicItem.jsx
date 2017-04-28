import React from 'react'
import {connect} from 'react-redux'

import {List, ListItem} from 'material-ui/List';
import ListItemIcon from 'material-ui/svg-icons/av/volume-up'

import {fetchMusicItem} from './MusicActions'
import Header from '../app/Header'
import Spinner from '../app/Spinner'
import AppFloatingActionButton from '../app/AppFloatingActionButton'

class MusicItem extends React.Component {

  listRoute = '/music'

  constructor(props) {
    super(props);
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
        <Header title={this.props.current.title} />
        {items}
        <AppFloatingActionButton route="/music"/>
        <Spinner/>
      </div>
    )
  }
}

export default connect((store) => {
  window.xstore = store
  return {
    fetching: store.music.fetching,
    current: store.music.current,
  }
})(MusicItem);