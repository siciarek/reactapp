import React from 'react'
import {connect} from 'react-redux'
import {browserHistory as router} from 'react-router'
import ListItemIcon from 'material-ui/svg-icons/action/face'
import {fetchAuthorList as loadList} from './AuthorActions'
import {AppSimpleList} from '../app/components'

const mapStateToProps = (state) => {
  return {
    title: 'Authors',
    icon: <ListItemIcon/>,
    items: state.author.items,
    goTo: id => router.push(`authors/${id}`),
  }
}

const mapDispatchToProps = (dispatch) => {
  dispatch(loadList())

  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSimpleList)
