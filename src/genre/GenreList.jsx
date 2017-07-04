import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchListGenre} from './GenreActions'
import {GenreListComponent} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'Genres',
    items: state.genre.items,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadList: bindActionCreators(fetchListGenre, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreListComponent)