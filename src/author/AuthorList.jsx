import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory as router} from 'react-router'
import ListItemIcon from 'material-ui-icons/Face'
import {fetchAuthorList as loadList} from './AuthorActions'
import {AppSimpleAutoloadingList} from '../app/components'

const mapStateToProps = (state) => {
  return {
    title: 'Authors',
    icon: <ListItemIcon/>,
    items: state.author.items,
    goTo: id => router.push(`/authors/${id}`),
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadList: bindActionCreators(loadList, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSimpleAutoloadingList)
