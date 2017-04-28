import React from 'react'
import {connect} from 'react-redux'

import {fetchAuthorItem} from './AuthorActions'

import Header from '../app/Header'
import Spinner from '../app/Spinner'
import AppFloatingActionButton from '../app/AppFloatingActionButton'

class AuthorItem extends React.Component {

  listRoute = '/authors'

  constructor(props) {
    super(props);
    this.props.dispatch(fetchAuthorItem(this.props.params.id))
  }

  render() {
    const style = {
      display: this.props.fetching === true ? 'block' : 'none',
    }

    return (
      <div className="container">
        <Header icon="mic" title={this.props.current.description} style={style} />
        <pre className="song">{this.props.current.info}</pre>
        <AppFloatingActionButton route="/authors"/>
        <Spinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.author.fetching,
    current: store.author.current,
  }
})(AuthorItem);