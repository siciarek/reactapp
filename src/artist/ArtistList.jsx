import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory as router} from 'react-router'
import ItemIcon from 'material-ui-icons/Mic'
import {swapListItems} from '../app/AppActions'
import {AppSortableList} from '../app/components'

const mapStateToProps = (state, ownProps) => {

  return {
    model: 'artist',
    title: 'Artists',
    icon: <ItemIcon/>,
    goto: id => router.push(`/artists/${id}`),
    items: state.artist.items,
    sortable: state.user.authenticated,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return bindActionCreators({
    swap: (model, src, trg, onError) => swapListItems(model, src, trg, onError)
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSortableList)