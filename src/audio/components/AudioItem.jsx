import React from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../../app/components'

class AudioItem extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {items, router, params: {item_id}} = this.props

    if (!items) {
      return null
    }

    const item = items.find(i => i.id.toString() === item_id)

    if (item === undefined) {
      return null
    }

    const {song: {id, title}, description, artists, info, path} = item
    const performedBy = artists.map(artist => artist.name).join(', ')

    return <div>
      <AppHeader title={title}/>
      <AppFloatingActionButton action={() => router.push(`/audio/${id}`)}/>
      <AppSpinner/>
      <br/>
      <h3>{performedBy} ─ {description}</h3>
      <br/>
      <YouTube videoId={path.replace(/^.*?v=([^&]+)(&.*?)$/, '$1')}/>
      <p>{info}</p>
    </div>
  }
}

AudioItem.propTypes = {
  init: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
}

AudioItem.defaultProps = {
  init: () => {},
  items: [],
}

export default AudioItem
