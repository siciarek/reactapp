import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchArtistItem} from './ArtistActions'
import {AppSimpleAutoloadingItem} from '../app/widgets'

const mapStateToProps = (state, ownProps) => {
  return {
    returnRoute: '/artists',
    content: state.artist.current,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: () => fetchArtistItem(ownProps.params.id)
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSimpleAutoloadingItem)