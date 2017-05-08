import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui/svg-icons/action/face'
import AppHeader from '../app/AppHeader'
import AppSpinner from '../app/AppSpinner'
import {fetchAuthorList} from './AuthorActions'


class AuthorList extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchAuthorList())
  }

  render() {

    const temp = this.props.items.map((item) => {
      return <ListItem
        leftIcon={<ListItemIcon />}
        containerElement={<Link to={`authors/${item.id}`}/>}
        key={item.id}
        primaryText={item.name}
      />
    })

    const items = (
      <List>
        {temp}
      </List>
    )

    return (
      <div className="container">
        <AppHeader title="Authors"/>
        {items}
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.author.fetching,
    items: store.author.items,
  }
})(AuthorList)