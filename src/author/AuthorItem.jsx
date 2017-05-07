import React from 'react'
import {connect} from 'react-redux'
import {fetchAuthorItem} from './AuthorActions'
import AppHeader from '../app/AppHeader'
import AppSpinner from '../app/AppSpinner'
import AppFloatingActionButton from '../app/AppFloatingActionButton'

class AuthorItem extends React.Component {

  constructor(props) {
    super(props)
    this.props.dispatch(fetchAuthorItem(this.props.params.id))
  }

  render() {

    if(this.props.fetching === true) {
      return <AppSpinner/>
    }

    return (
      <div className="container">
        <AppHeader icon="mic" title={this.props.current.description} />
        <pre className="text">{this.props.current.info}</pre>
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