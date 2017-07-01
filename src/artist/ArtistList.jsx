import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ListItemIcon from 'material-ui/svg-icons/av/mic'
import {fetchArtistList} from './ArtistActions'
import {AppSimpleComponentList} from '../app/components'

// https://github.com/reactjs/react-redux/blob/master/docs/api.md

const mapStateToProps = (state) => {
  return {
    title: 'Artists',
    icon: <ListItemIcon/>,
    items: state.artist.items,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    'fetchList': bindActionCreators(fetchArtistList, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSimpleComponentList)
