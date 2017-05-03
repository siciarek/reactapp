import React from 'react'
import {connect} from 'react-redux'
import ItemHeaderIcon from 'material-ui/svg-icons/action/face'
import {fetchArtistItem} from './ArtistActions'
import AppHeader from '../app/AppHeader'
import AppSpinner from '../app/AppSpinner'
import AppFloatingActionButton from '../app/AppFloatingActionButton'

class ArtistItem extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchArtistItem(this.props.params.id))
  }

  render() {
    const style = {
      display: this.props.fetching === true ? 'block' : 'none',
    }

    return (
      <div className="container">
        <AppHeader leftIcon={<ItemHeaderIcon/>} title={this.props.current.description} style={style}/>
        <pre className="song">{this.props.current.info}</pre>
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