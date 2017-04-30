import React from 'react'
import {connect} from 'react-redux'

import {fetchLyricsItem} from './LyricsActions'
import Header from '../app/Header'
import Spinner from '../app/Spinner'
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
        <Header title={this.props.current.title} style={style} />
        <pre className="song">
          {this.props.current.lyrics}
          </pre>
        <AppFloatingActionButton icon="keyboard_arrow_left" route="/lyrics"/>
        <Spinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.lyrics.fetching,
    current: store.lyrics.current,
  }
})(LyricsItem);