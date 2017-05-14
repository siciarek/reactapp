import React from 'react'
import {connect} from 'react-redux'
import {fetchAuthorItem} from './AuthorActions'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import AppFloatingActionButton from '../app/components/AppFloatingActionButton'

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
    fetching: store.author.fetching,
    current: store.author.current,
  }
})(AuthorItem)