import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router'
import {fetchArtistList} from './ArtistActions'
import Header from '../app/Header'

import Spinner from '../app/Spinner'

import {List, ListItem} from 'material-ui/List';
import ListItemIcon from 'material-ui/svg-icons/av/mic'


class ArtistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  componentDidMount() {
    this.props.dispatch(fetchArtistList())
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
          containerElement={<Link to={`/artists/${item.id}`}/>}
          key={item.id}
          primaryText={item.name}
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
        <Header title="Artist"/>
        {items}
        <Spinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.artist.fetching,
    items: store.artist.items,
  }
})(ArtistList);