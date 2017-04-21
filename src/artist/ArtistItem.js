import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import BackToListIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ItemHeaderIcon from 'material-ui/svg-icons/action/face'

import {fetchArtistItem} from './ArtistActions'
import Header from '../components/Header'

import Spinner from '../app/Spinner'

class ArtistItem extends React.Component {

  listRoute = '/artists'

  componentDidMount() {
    this.props.dispatch(fetchArtistItem(this.props.params.id))
  }

  render() {
    const style = {
      display: this.props.fetching === true ? 'block' : 'none',
    }

    return (
      <div className="container">
        <Header leftIcon={<ItemHeaderIcon/>} title={this.props.current.description} style={style} />
        <pre className="song">{this.props.current.info}</pre>
        <FloatingActionButton className="button-fixed-bottom-right" containerElement={<Link to={this.listRoute}/>}>
          <BackToListIcon />
        </FloatingActionButton>
        <Spinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.artist.fetching,
    current: store.artist.current,
  }
})(ArtistItem);