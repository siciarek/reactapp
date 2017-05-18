import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui/svg-icons/action/stars'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import {fetchListGenre} from './GenreActions'


class GenreList extends React.Component {

  constructor(props) {
    super(props)
    this.props.dispatch(fetchListGenre())
  }

  render() {

    if(this.props.fetching) {
      return <AppSpinner/>
    }

    return (
      <div className="container">
        <AppHeader title="Genres"/>
        <List>
          {
            this.props.items.map((item) => {
              return <ListItem
                leftIcon={<ListItemIcon />}
                containerElement={<Link to={`/genre/${item.id}/show`}/>}
                key={item.id}
                primaryText={item.name}
                secondaryText={item.category.name}
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
    fetching: store.genre.fetching,
    items: store.genre.items,
  }
})(GenreList)