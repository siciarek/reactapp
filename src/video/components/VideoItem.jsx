import React from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../../app/widgets'

class VideoItem extends React.Component {

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
      <AppFloatingActionButton action={() => router.push(`/video/${id}`)}/>
      <AppSpinner/>
      <br/>
      <h3>{performedBy} ─ {description}</h3>
      <br/>
      <YouTube videoId={path.replace(/^.*?v=([^&]+)(&.*?)$/, '$1')}/>
      <p>{info}</p>
    </div>
  }
}

VideoItem.propTypes = {
  items: PropTypes.array.isRequired,
  init: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
}

VideoItem.defaultProps = {
  items: [],
  init: () => {},
  params: {
    item_id: 0,
  }
}

export default VideoItem
