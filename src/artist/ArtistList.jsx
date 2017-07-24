import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory as router} from 'react-router'
import ItemIcon from 'material-ui-icons/Mic'
import {swapListItems} from '../app/AppActions'
import {AppSortableList, AppSimpleAutoloadingList} from '../app/components'
import {fetchArtistList} from '../artist/ArtistActions'


const mapStateToProps = (state, ownProps) => {

  return {
    model: 'artist',
    title: 'Artists',
    icon: <ItemIcon/>,
    goTo: id => router.push(`/artists/${id}`),
    items: state.artist.items,
    sortable: state.user.authenticated,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    init: bindActionCreators(fetchArtistList, dispatch),
    swap: bindActionCreators((model, src, trg, onError) => swapListItems(model, src, trg, onError), dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSortableList)