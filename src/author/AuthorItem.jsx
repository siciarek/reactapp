import React from 'react'
import {connect} from 'react-redux'

import {fetchAuthorItem} from './AuthorActions'

import AppHeader from '../app/AppHeader'
import AppSpinner from '../app/AppSpinner'
import AppFloatingActionButton from '../app/AppFloatingActionButton'

class AuthorItem extends React.Component {

  listRoute = '/authors'

  constructor(props) {
    super(props)
    this.props.dispatch(fetchAuthorItem(this.props.params.id))
  }

  render() {
    const style = {
      display: this.props.fetching === true ? 'block' : 'none',
    }

    return (
      <div className="container">
        <AppHeader icon="mic" title={this.props.current.description} style={style} />
        <pre className="song">{this.props.current.info}</pre>
        <AppFloatingActionButton route="/authors"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.author.fetching,
    current: store.author.current,
  }
})(AuthorItem)