import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchListGenre} from './GenreActions'
import {GenreList} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'Genres',
    items: state.genre.items,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: fetchListGenre,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreList)