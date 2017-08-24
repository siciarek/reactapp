import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchAuthorItem} from './AuthorActions'
import {AppSimpleAutoloadingItem} from '../app/widgets'

const mapStateToProps = (state, ownProps) => {
  return {
    returnRoute: '/authors',
    content: state.author.current,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: () => fetchAuthorItem(ownProps.params.id)
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSimpleAutoloadingItem)