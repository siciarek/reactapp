import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router'
import {fetchLyricsList} from './LyricsActions'
import Header from '../components/Header'

import Spinner from '../app/Spinner'

import {List, ListItem} from 'material-ui/List';
import ListItemIcon from 'material-ui/svg-icons/av/library-books'


class LyricsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  componentDidMount() {
    this.props.dispatch(fetchLyricsList())
  }

  render() {

    let items = (
      <div>
      </div>
    )

    if (this.props.songs.length > 0) {
      const temp = this.props.songs.map((item) => {
        return <ListItem leftIcon={<ListItemIcon />}
                         containerElement={<Link to={'/lyrics/' + item.id}/>}
                         key={item.id}
                         primaryText={item.title}/>
      })

      items = (
        <List>
          {temp}
        </List>
      )
    }

    return (
      <div className="container">
        <Header title="Lyrics"/>
        {items}
        <Spinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.lyrics.fetching,
    songs: store.lyrics.songs,
  }
})(LyricsList);