import React from 'react'
import {connect} from 'react-redux'

import {List, ListItem} from 'material-ui/List'
import ListItemIcon from 'material-ui/svg-icons/av/volume-up'

import {fetchAudioItems} from './AudioActions'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import AppFloatingActionButton from '../app/components/AppFloatingActionButton'

class AudioItems extends React.Component {

  constructor(props) {
    super(props)
    this.props.dispatch(fetchAudioItems(this.props.params.id))
  }

  render() {

    let title = undefined

    if (this.props.current === undefined) {
      return null
    }

    const items = this.props.current.map(item => {

      title = item.song.title

      const atemp = item.artists.map(artist => {
        return artist.name
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
          {items}
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
})(AudioItems)