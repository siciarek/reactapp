import React from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router'
import Header from '../app/Header'

import Spinner from '../app/Spinner'

import {List, ListItem} from 'material-ui/List';

import {fetchAuthorList} from './AuthorActions'
import ListItemIcon from 'material-ui/svg-icons/action/face'


class AuthorList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchAuthorList())
  }

  render() {

    let items = (
      <div>
      </div>
    )

    if (this.props.items.length > 0) {
      const temp = this.props.items.map((item) => {
        return <ListItem
          leftIcon={<ListItemIcon />}
          containerElement={<Link to={`authors/${item.id}`}/>}
          key={item.id}
          primaryText={item.name}
        />
      })

      items = (
        <List>
          {temp}
        </List>
      )
    }

    return (
      <div className="container">
        <Header title="Author"/>
        {items}
        <Spinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.author.fetching,
    items: store.author.items,
  }
})(AuthorList);