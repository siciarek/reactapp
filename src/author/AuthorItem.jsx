import React from 'react'
import {connect} from 'react-redux'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../app/components'
import {fetchAuthorItem} from './AuthorActions'

class AuthorItem extends React.Component {

  constructor(props) {
    super(props)
    this.props.dispatch(fetchAuthorItem(this.props.params.id))
  }

  render() {

    return (
      <div>
        <AppHeader title={this.props.current.description} />
        <pre className="text">{this.props.current.info}</pre>
        <AppFloatingActionButton route="/authors"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    current: store.author.current,
  }
})(AuthorItem)