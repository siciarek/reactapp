import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {List, ListItem} from 'material-ui/List';
import ListItemIcon from 'material-ui/svg-icons/av/volume-up'
import BackToListIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import {fetchMusicItem} from './MusicActions'
import Header from '../app/Header'
import Spinner from '../app/Spinner'

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
        <FloatingActionButton className="button-fixed-bottom-right" containerElement={<Link to={this.listRoute}/>}>
          <BackToListIcon />
        </FloatingActionButton>
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