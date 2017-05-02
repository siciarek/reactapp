import React from 'react'
import {connect} from 'react-redux'

import {fetchLyricsItem} from './LyricsActions'
import AppHeader from '../app/AppHeader'
import AppSpinner from '../app/AppSpinner'
import AppFloatingActionButton from '../app/AppFloatingActionButton'

class LyricsItem extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchLyricsItem(this.props.params.id))
  }

  render() {
    const style = {
      display: this.props.fetching === true ? 'block' : 'none',
    }

    return (
      <div className="container">
        <AppHeader title={this.props.current.title} style={style} />
        <pre className="song">{this.props.current.lyrics}</pre>
        <AppFloatingActionButton icon="keyboard_arrow_left" route="/lyrics"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.lyrics.fetching,
    current: store.lyrics.current,
  }
})(LyricsItem)