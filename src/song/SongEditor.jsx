import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {AppHeader, AppSpinner} from '../app/components'
import {fetchSong, saveSong, removeSong} from './SongActions'
import SongEditorForm from './SongEditorForm'

class SongEditor extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {authenticated, item, saveSong} = this.props

    if (typeof item.id === 'undefined' || authenticated === false) {
      return null
    }

    const title = item.id ? `Edit (${item.title})` : 'Add song'

    return <div>
      <AppHeader title={title}/>
      <AppSpinner/>
      <SongEditorForm initialValues={item} onSubmit={saveSong}/>
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.song.current,
    authenticated: state.user.authenticated,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: () => fetchSong(ownProps.params.id),
    saveSong: data => saveSong({...data, id: ownProps.params.id}),
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SongEditor)