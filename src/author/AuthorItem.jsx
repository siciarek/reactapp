import React from 'react'
import {connect} from 'react-redux'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../app/components'
import {fetchAuthorItem} from './AuthorActions'

class AuthorItem extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchAuthorItem(this.props.params.id))
  }

  render() {
    const {description, info} = this.props.current

    return <div>
      <AppHeader title={description}/>
      <AppFloatingActionButton route="/authors"/>
      <AppSpinner/>
      <pre className="text">{info}</pre>
    </div>
  }
}

export default connect((store) => {
  return {
    current: store.author.current,
  }
})(AuthorItem)