import React from 'react'
import {connect} from 'react-redux'

import {fetchTweets, updateTweet} from '../actions/tweetsActions'

class Tweets extends React.Component {

  fetch() {
    this.props.dispatch(fetchTweets())
  }

  update() {
    this.props.dispatch(updateTweet('5783d9ed917a640100f1890f', Math.random()))
  }

  render() {
    const tweets = this.props.tweets;

    if (!tweets.length) {
      return <button onClick={this.fetch.bind(this)}>load tweets</button>
    }

    const mappedTweets = tweets.map(tweet => <li onClick={this.update.bind(this)} key={tweet.id}>{tweet.text}</li>)

    return (
      <ul>
        {mappedTweets}
      </ul>
    )
  }
}

export default connect((store) => {
  return {
    tweets: store.tweets.tweets,
  }
})(Tweets);