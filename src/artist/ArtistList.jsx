import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ListItemIcon from 'material-ui/svg-icons/av/mic'
import {fetchArtistList as loadList} from './ArtistActions'
import {AppSimpleAutoloadingList} from '../app/components'

// https://github.com/reactjs/react-redux/blob/master/docs/api.md

const mapStateToProps = (state) => {
  return {
    title: 'Artists',
    icon: <ListItemIcon/>,
    items: state.artist.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadList: bindActionCreators(loadList, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSimpleAutoloadingList)
