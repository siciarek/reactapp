import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../app/components'
import {fetchAudioItems} from './AudioActions'

class AudioItem extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchAudioItems(this.props.params.id))
  }

  render() {

    if (typeof this.props.current.filter === undefined || this.props.current.length === 0) {
      return null
    }

    const temp = this.props.current.filter(e => {
      return e.id === parseInt(this.props.params.item_id, 10)
    })

    const item = (temp.length > 0) ? temp.shift() : null

    if (item === null) {
      return null
    }

    const artists = item.artists.map(e => {
      return e.name
    })

   return (
      <div>

        <AppHeader title={item.song.title}/>

        <br/>

        <h2>{artists.join(', ')} - {item.description}</h2>

        <br/>

        <YouTube
          videoId={item.path.replace(/^.*?v=([^&]+)(&.*?)$/, '$1')}
        />

        <p>{item.info}</p>

        <AppFloatingActionButton route={`/audio/${item.song.id}`}/>
        <AppSpinner/>
      </div>
    )
  }
}

AudioItem.defaultProps = {
  id: PropTypes.number.isRequired,
}

export default connect((store) => {
  return {
    current: store.audio.current,
  }
})(AudioItem)