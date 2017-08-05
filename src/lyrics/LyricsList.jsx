import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import AppFloatingActionButton from "../app/components/AppFloatingActionButton"
import IconAdd from 'material-ui-icons/Add'

import {fetchLyricsList} from './LyricsActions'
import {removeSong} from '../song/SongActions'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import AppList from '../app/components/AppList'

class LyricsList extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      selectedItem: 0,
    }
  }

  componentWillMount() {
    this.props.init()
  }

  generateActions = (id, handleRemoval) => {
    return {
      show: () => this.props.router.push(`/lyrics/${id}`),
      edit: () => this.props.router.push(`/song/${id}/edit`),
      remove: handleRemoval,
    }
  }

  render() {

    return (
      <div>
        <AppHeader title="Lyrics"/>
        <AppSpinner/>
        <AppFloatingActionButton icon={<IconAdd/>} action={() => this.props.router.push("/song/add")}/>
        <AppList
          primaryTextIndexes={['title']}
          secondaryTextIndexes={['genre.name', 'firstPublishedAt']}

          removeItemFunction={id => this.props.dispatch(removeSong(id))}
          selectFunction={id => this.setState({selectedItem: id})}
          generateActions={this.generateActions}

          selectedItem={this.state.selectedItem}
          items={this.props.items}
          editable={this.props.authenticated}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.user.authenticated,
    items: state.lyrics.items,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    init: () => fetchLyricsList(),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(LyricsList)