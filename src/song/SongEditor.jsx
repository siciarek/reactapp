import React from 'react'
import {connect} from 'react-redux'
import AppHeader from '../app/AppHeader'
import {fetchSong, updateSong, saveSong, removeSong} from './SongActions'
import SongEditorForm from './SongEditorForm'
import {authCheck} from '../user/UserActions'

class SongEditor extends React.Component {

  constructor(params) {
    super(params)
    this.props.dispatch(authCheck())
  }

  componentWillMount() {
    let state = {...this.props.current}
    state.id = null
    state.genre = null
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

    if (this.props.authenticated === false) {
      return (
        <div>
        </div>
      )
    }

    const title = this.props.current.id ? 'Edit song' : 'Add song'

    return (
      <div className="container">
        <AppHeader title={title}/>
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
    authenticated: store.user.authenticated,
  }
})(SongEditor)