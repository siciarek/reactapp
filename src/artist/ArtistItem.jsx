import React from 'react'
import {connect} from 'react-redux'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../app/components'
import {fetchArtistItem} from './ArtistActions'

class ArtistItem extends React.Component {

  constructor(props) {
    super(props)
    this.props.dispatch(fetchArtistItem(this.props.params.id))
  }

  render() {

    return (
      <div>
        <AppHeader title={this.props.current.description} />
        <pre className="text">{this.props.current.info}</pre>
        <AppFloatingActionButton route="/artists"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    current: store.artist.current,
  }
})(ArtistItem)