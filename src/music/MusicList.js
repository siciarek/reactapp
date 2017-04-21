import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router'
import Header from '../app/Header'

import Spinner from '../app/Spinner'

import {List, ListItem} from 'material-ui/List';

import {fetchMusicList} from './MusicActions'
import ListItemIcon from 'material-ui/svg-icons/av/volume-up'
import OpenMenuIcon from 'material-ui/svg-icons/action/view-list';
import FloatingActionButton from 'material-ui/FloatingActionButton';

class MusicList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchMusicList())
  }

  toggleMenu = () => {

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
        <Header title="Music"/>
        {items}
        <FloatingActionButton
          className="button-fixed-bottom-right" onTouchTap={() => this.props.router.push('/')}>
          <OpenMenuIcon />
        </FloatingActionButton>
        <Spinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.music.fetching,
    items: store.music.items,
  }
})(MusicList);