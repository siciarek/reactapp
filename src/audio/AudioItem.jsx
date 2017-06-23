import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {List, ListItem} from 'material-ui/List'
import ListItemIcon from 'material-ui/svg-icons/av/volume-up'

import {fetchAudioItem} from './AudioActions'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../app/components'

class AudioItem extends React.Component {

  constructor(props) {
    super(props)
    // this.props.dispatch(fetchAudioItem(this.props.params.id))
  }

  render() {

    if(typeof this.props.current.filter === undefined) {
      return null
    }

    const item = this.props.current.filter(e => {
      return e.id === this.props.params.id
    })


    return
    <div>
    <h1>Audio Item #{this.props.params.id}</h1>
    </div>


    // let title = undefined
    //
    // if (this.props.current === undefined) {
    //   return null
    // }
    //
    // return (
    //   <div>
    //     <AppHeader title={title}/>
    //
    //     <p>Audio item #{this.props.params.id}</p>
    //
    //     <AppFloatingActionButton route="/audio"/>
    //     <AppSpinner/>
    //   </div>
    // )
  }
}

AudioItem.defaultProps = {
  id: PropTypes.number.isRequired,
}

export default connect((store) => {
  return {
    current: store.audio.current,
  }
})(AudioItem)