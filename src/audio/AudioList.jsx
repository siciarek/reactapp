import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui/svg-icons/av/volume-up'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import {fetchAudioList} from './AudioActions'
import AppFloatingActionButton from '../app/components/AppFloatingActionButton'

class AudioList extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchAudioList())
  }

  render() {

    return (
      <div>
        <AppHeader title="Audio"/>
        <List>
          {
            this.props.items.map((item) => {
              return <ListItem
                key={item.id}
                leftIcon={<ListItemIcon />}
                containerElement={<Link to={`audio/${item.id}`}/>}
                primaryText={item.title}
                secondaryText={`items: ${item.audioCount}`}
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
    items: store.audio.items,
  }
})(AudioList)