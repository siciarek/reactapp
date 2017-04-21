import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import BackToListIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import {fetchLyricsItem} from './LyricsActions'
import Header from '../components/Header'

import Spinner from '../app/Spinner'

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
        <Header title={this.props.song.title} style={style} />
        <pre className="song">{this.props.song.lyrics}</pre>
        <FloatingActionButton className="button-fixed-bottom-right" containerElement={<Link to={'/lyrics'}/>}>
          <BackToListIcon />
        </FloatingActionButton>
        <Spinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.lyrics.fetching,
    song: store.lyrics.song,
  }
})(LyricsItem);