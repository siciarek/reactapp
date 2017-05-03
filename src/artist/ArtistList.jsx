import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router'
import {fetchArtistList} from './ArtistActions'
import AppHeader from '../app/AppHeader'

import AppSpinner from '../app/AppSpinner'

import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui/svg-icons/av/mic'


class ArtistList extends React.Component {

  componentWillMount() {
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
        <AppHeader title="Artist"/>
        {items}
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.artist.fetching,
    items: store.artist.items,
  }
})(ArtistList)