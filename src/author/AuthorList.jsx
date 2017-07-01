import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ListItemIcon from 'material-ui/svg-icons/action/face'
import {fetchAuthorList} from './AuthorActions'
import {AppSimpleComponentList} from '../app/components'

const mapStateToProps = (state) => {
  return {
    title: 'Authors',
    icon: <ListItemIcon/>,
    items: state.author.items,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    'fetchList': bindActionCreators(fetchAuthorList,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSimpleComponentList)
