import React from 'react'
import {connect} from 'react-redux'

import {fetchTweets, updateTweet} from '../actions/tweetsActions'

class Tweets extends React.Component {

  fetch() {
    this.props.dispatch(fetchTweets())
  }

  update(id, text) {
    let val = prompt("Please enter new value", text);

    if (val !== null && val !== text) {
      this.props.dispatch(updateTweet(id, val))
    }
  }

  render() {
    const items = this.props.tweets;
    const style = {
      cursor: 'pointer',
    }

    if (!items.length) {
      return <button onClick={this.fetch.bind(this)}>load tweets</button>
    }

    const mappedTweets = items.map((item) => {
        return <li key={item.id} onClick={this.update.bind(this, item.id, item.text)} style={style}>{item.text}</li>
      }
    )

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