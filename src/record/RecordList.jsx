import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui/svg-icons/av/album'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import {fetchRecordList} from './RecordActions'
import AppFloatingActionButton from '../app/components/AppFloatingActionButton'

class RecordList extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchRecordList())
  }

  render() {

    return (
      <div>
        <AppHeader title="Records"/>
        <List>
          {
            this.props.items.map(item => {
              const artists = item.artists.map(e => e.name).join(', ')
              return <ListItem
                key={item.id}
                leftIcon={<ListItemIcon />}
                containerElement={<Link to={`/records/${item.id}`}/>}
                primaryText={`${item.title}/${artists}`}
                secondaryText={`number of tracks: ${item.tracks.length}`}
              />
            })
          }
        </List>
        <AppFloatingActionButton route="/"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    items: store.record.items,
  }
})(RecordList)