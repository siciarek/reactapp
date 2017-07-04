import React from 'react'
import {connect} from 'react-redux'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../app/components'
import {fetchArtistItem} from './ArtistActions'

class ArtistItem extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchArtistItem(this.props.params.id))
  }

  render() {

    const {description, info} = this.props.current
    return <div>
      <AppHeader title={description}/>
      <pre className="text">{info}</pre>
      <AppFloatingActionButton route="/artists"/>
      <AppSpinner/>
    </div>
  }
}

export default connect((store) => {
  return {
    current: store.artist.current,
  }
})(ArtistItem)