import React from 'react'
import {connect} from 'react-redux'

import {fetchUser} from '../actions/userActions'

import Tweets from './Tweets'

class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  render() {

    const {user} = this.props;

    return (
      <div>
        <h1>{user.name}</h1>
        <Tweets />
      </div>
    )
  }
}

export default connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
  }
})(Layout);