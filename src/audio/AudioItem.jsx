import React from 'react'
import {connect} from 'react-redux'

import {List, ListItem} from 'material-ui/List'
import ListItemIcon from 'material-ui/svg-icons/av/volume-up'

import {fetchAudioItem} from './AudioActions'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import AppFloatingActionButton from '../app/components/AppFloatingActionButton'

class AudioItem extends React.Component {

  constructor(props) {
    super(props)
    this.props.dispatch(fetchAudioItem(this.props.params.id))
  }

  render() {

    if (this.props.current === undefined) {
      return false
    }

    let title = undefined;

    const temp = this.props.current.map((item) => {

      title = item.song.title

      const atemp = item.artists.map((artist) => {
        return artist.name;
      })

      return <ListItem
        key={item.id}
        leftIcon={<ListItemIcon />}
        primaryText={atemp.join(', ')}
        secondaryText={item.description}
        href={item.path}
      />
    })

    return (
      <div>
        <AppHeader title={title}/>
        <List>
          {temp}
        </List>
        <AppFloatingActionButton route="/audio"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    current: store.audio.current,
  }
})(AudioItem)