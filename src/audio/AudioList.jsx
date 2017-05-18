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

    let items = (
      <div>
      </div>
    )

    if (this.props.items.length > 0) {
      const temp = this.props.items.map((item) => {
        return <ListItem
          leftIcon={<ListItemIcon />}
          containerElement={<Link to={`audio/${item.id}`}/>}
          key={item.id}
          primaryText={item.title}
          secondaryText={`items: ${item.audioCount}`}
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
        <AppHeader title="Audio"/>
        {items}
        <AppFloatingActionButton route="/"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.audio.fetching,
    items: store.audio.items,
  }
})(AudioList)