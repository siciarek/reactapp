import React from 'react'
import PropTypes from 'prop-types'
import AppHeader from '../../app/components/AppHeader'
import AppSpinner from '../../app/components/AppSpinner'
import AppFloatingActionButton from '../../app/components/AppFloatingActionButton'

class LyricsItem extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    return <div>
      <AppHeader title={this.props.current.title}/>
      <AppSpinner/>
      <AppFloatingActionButton action={() => this.props.router.push('/lyrics')}/>
      <pre className="text">{this.props.current.lyrics}</pre>
    </div>
  }
}

LyricsItem.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
}

LyricsItem.defaultProps = {
  params: {id: "0"}
}

export default LyricsItem