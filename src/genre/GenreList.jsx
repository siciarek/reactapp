import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui/svg-icons/action/stars'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../app/components'
import {fetchListGenre} from './GenreActions'


class GenreList extends React.Component {

  constructor(props) {
    super(props)
    this.props.dispatch(fetchListGenre())
  }

  render() {

    if(typeof this.props.items.map === 'undefined'){
      return <AppSpinner/>
    }

    return (
      <div>
        <AppHeader title="Genres"/>
        <List>
          {
            this.props.items.map(item => {
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
        <AppFloatingActionButton icon="add" route="/genre/new"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    items: store.genre.items,
  }
})(GenreList)