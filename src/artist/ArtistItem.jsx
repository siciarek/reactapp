import React from 'react'
import {connect} from 'react-redux'
import {fetchArtistItem} from './ArtistActions'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import AppFloatingActionButton from '../app/components/AppFloatingActionButton'

class ArtistItem extends React.Component {

  constructor(props) {
    super(props)
    this.props.dispatch(fetchArtistItem(this.props.params.id))
  }

  render() {

    if(this.props.fetching === true) {
      return <AppSpinner/>
    }

    return (
      <div className="container">
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
    fetching: store.artist.fetching,
    current: store.artist.current,
  }
})(ArtistItem)