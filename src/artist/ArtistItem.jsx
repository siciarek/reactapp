import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchArtistItem as loadContent} from './ArtistActions'
import {AppSimpleAutoloadingItem} from '../app/components'

const mapStateToProps = (state, ownProps) => {
  return {
    returnRoute: '/artists',
    content: state.artist.current,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadContent: bindActionCreators(() => loadContent(ownProps.params.id), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSimpleAutoloadingItem)