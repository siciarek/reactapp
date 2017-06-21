import React from 'react'
import {connect} from 'react-redux'

import AppFloatingActionButton from "../app/components/AppFloatingActionButton"

import {fetchLyricsList} from './LyricsActions'
import {removeSong} from '../song/SongActions'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import AppList from '../app/components/AppList'

class LyricsList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedItem: 0,
    }
  }

  componentWillMount() {
    this.props.dispatch(fetchLyricsList())
  }

  generateActions = (id, handleRemoval) => {
    return {
      show: () => this.props.router.push(`/lyrics/${id}`),
      edit: () => this.props.router.push(`/song/${id}/edit`),
      remove: handleRemoval,
    }
  }

  render() {

    return (
      <div>
        <AppHeader title="Lyrics"/>
        <AppList
          primaryTextIndexes={['title']}
          secondaryTextIndexes={['genre.name','firstPublishedAt']}

          removeItemFunction={(id) => this.props.dispatch(removeSong(id))}
          selectFunction={(id) => this.setState({selectedItem: id})}
          generateActions={this.generateActions}

          selectedItem={this.state.selectedItem}
          items={this.props.items}
          editable={this.props.authenticated}
        />
        <AppFloatingActionButton icon="add" route="/song/add"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {

  return {
    authenticated: true, // store.user.authenticated,
    items: store.lyrics.items,
  }
})(LyricsList)