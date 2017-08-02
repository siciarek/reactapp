import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchListGenre as init} from './GenreActions'
import {GenreListComponent} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'Genres',
    items: state.genre.items,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    init: bindActionCreators(init, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreListComponent)