import React from 'react'
import {connect} from 'react-redux'

import {fetchUsers, updateUser} from '../actions/userActions'
import Header from './Header'

class User extends React.Component {

  fetch() {
    this.props.dispatch(fetchUsers())
  }

  update(id, text) {
    let val = prompt("Please enter new value", text);

    if (val !== null && val !== text) {
      this.props.dispatch(updateUser(id, val))
    }
  }

  render() {
    const items = this.props.users;
    const style = {
      cursor: 'pointer',
    }

    let mappedItems = (
      <button className={'btn-success btn-lg btn'} onClick={this.fetch.bind(this)}>load users</button>
    )

    if (items.length > 0) {
      const temp = items.map((item) => {
          return <li key={item.id} onClick={this.update.bind(this, item.id, item.name)} style={style}>
            {item.name}
          </li>
        }
      )

      mappedItems = (
        <ul>
          {temp}
        </ul>
      )
    }

    return (
      <div>
        <Header title="Users"/>
        {mappedItems}
      </div>
    )
  }
}

export default connect((store) => {
  return {
    users: store.user.users,
  }
})(User);