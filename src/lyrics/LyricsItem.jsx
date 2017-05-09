import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchLyricsItem} from './LyricsActions'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import AppFloatingActionButton from '../app/components/AppFloatingActionButton'

class LyricsItem extends React.Component {
  static propTypes = {
    params: PropTypes.shape({
    }).isRequired,
  }

  componentWillMount() {
    this.props.dispatch(fetchLyricsItem(this.props.params.id))
  }

  render() {

    return (
      <div className="container">
        <AppHeader title={this.props.current.title}/>
        <pre className="text">{this.props.current.lyrics}</pre>
        <AppFloatingActionButton icon="keyboard_arrow_left" route="/lyrics"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    current: store.lyrics.current,
  }
})(LyricsItem)