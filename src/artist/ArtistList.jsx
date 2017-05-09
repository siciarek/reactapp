import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui/svg-icons/av/mic'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import {fetchArtistList} from './ArtistActions'


class ArtistList extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchArtistList())
  }

  render() {

    const temp = this.props.items.map((item) => {
      return <ListItem
        leftIcon={<ListItemIcon />}
        containerElement={<Link to={`artists/${item.id}`}/>}
        key={item.id}
        primaryText={item.name}
      />
    })

    const items = (
      <List>
        {temp}
      </List>
    )

    return (
      <div className="container">
        <AppHeader title="Artists"/>
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