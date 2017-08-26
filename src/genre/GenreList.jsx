import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchListGenre} from './GenreActions'
import {GenreList} from './components'

const mapStateToProps = (state, ownProps) => {
  return {
    title: 'Genres',
    items: state.genre.items,
    totalPages: state.genre.meta.totalPages,
    totalItemCount: state.genre.meta.totalItemCount,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {location: {query: {page = 1}}, router} = ownProps
  const prevPage = parseInt(page) > 1 ? parseInt(page) - 1 : 1
  const nextPage = parseInt(page) + 1

  return bindActionCreators({
    init: () => fetchListGenre(page),
    gotoNextPage: () => location.assign(`/genre/list?page=${nextPage}`),
    gotoPrevPage: () => location.assign(`/genre/list?page=${prevPage}`),
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreList)