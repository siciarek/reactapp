import React from 'react'
import {connect} from 'react-redux'

import Header from '../app/Header'
import {fetchSong, updateSong, saveSong, removeSong} from './SongActions'
import SongEditorForm from './SongEditorForm'

class SongEditor extends React.Component {

  componentWillMount() {
    let state = {...this.props.current}
    state.id = null
    state.genre = ''
    state.lyrics = ''
    state.title = ''
    state.createdAt = new Date()
    this.props.dispatch(updateSong(state))

    if (this.props.params.hasOwnProperty('id')) {
      this.props.dispatch(fetchSong(this.props.params.id))
    }
  }

  removeEntity = (id) => {
    this.props.dispatch(removeSong(id))
  }

  updateEntity = (key, value) => {
    let state = {...this.props.current}
    state[key] = value
    this.props.dispatch(updateSong(state))
  }

  saveEntity = () => {
    let state = {...this.props.current}
    if (this.props.params.hasOwnProperty('id')) {
      state['id'] = this.props.params.id
    }
    this.props.dispatch(saveSong(state))
  }

  render() {

    const title = this.props.current.id ? 'Edit song' : 'Add song'

    return (
      <div className="container">
        <Header title={title}/>
        <SongEditorForm
          current={this.props.current}
          updateEntity={this.updateEntity}
          saveEntity={this.saveEntity}
          removeEntity={this.removeEntity}
        />
      </div>
    )
  }
}

export default connect((store) => {
  return {
    current: store.song.current,
  }
})(SongEditor)