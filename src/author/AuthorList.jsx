import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui/svg-icons/action/face'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import {fetchAuthorList} from './AuthorActions'


class AuthorList extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchAuthorList())
  }

  render() {

    return (
      <div className="container">
        <AppHeader title="Authors"/>
        <List>
          {
            this.props.items.map((item) => {
              return <ListItem
                key={item.id}
                leftIcon={<ListItemIcon />}
                containerElement={<Link to={`authors/${item.id}`}/>}
                primaryText={item.description}
              />
            })
          }
        </List>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    items: store.author.items,
  }
})(AuthorList)