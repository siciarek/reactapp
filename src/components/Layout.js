import React from 'react'
import {connect} from 'react-redux'

import {fetchUser} from '../actions/userActions'
import {fetchTweets} from '../actions/tweetsActions'

class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  render() {
    const {user, tweets} = this.props;

    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    }

    const mappedTweets = tweets
    .slice(0, 12) // zdalne dane są popsute, tylko kilka pierwszych rekordów ma odp wartośc
    .map(tweet => <li key={tweet.id}>{tweet.text}</li>)

    return (
      <div>
        <h1>{user.name}</h1>
        <ul>{mappedTweets}</ul>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  }
})(Layout);