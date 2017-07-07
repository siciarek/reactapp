import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchAuthorItem as loadContent} from './AuthorActions'
import {AppSimpleAutoloadingItem} from '../app/components'

const mapStateToProps = (state, ownProps) => {
  return {
    returnRoute: '/authors',
    content: state.author.current,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadContent: bindActionCreators(() => loadContent(ownProps.params.id), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSimpleAutoloadingItem)