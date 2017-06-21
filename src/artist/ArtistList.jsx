import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui/svg-icons/av/mic'
import {AppHeader, AppSpinner} from '../app/components'
import {fetchArtistList} from './ArtistActions'


class ArtistList extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchArtistList())
  }

  render() {

    return (
      <div>
        <AppHeader title="Artists"/>
        <List>
          {
            this.props.items.map(item => {
              return <ListItem
                key={item.id}
                leftIcon={<ListItemIcon />}
                containerElement={<Link to={`artists/${item.id}`}/>}
                primaryText={item.description}
              />
            })
          }
        </List>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    items: store.artist.items,
  }
})(ArtistList)