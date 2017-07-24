import React from 'react'
import {browserHistory as routerHistory} from 'react-router'
import List, {ListItem, ListItemText, ListItemIcon} from 'material-ui/List'
import IconStars from 'material-ui-icons/Stars'
import IconAdd from 'material-ui-icons/Add'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../../app/components'

class GenreListComponent extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {items, title} = this.props

    return <div>
      <AppHeader title={title}/>
      <AppFloatingActionButton icon={<IconAdd/>} route="/genre/new"/>
      <AppSpinner/>
      <List>
        {
          items.map(({id, name, category}) =>
            <ListItem button key={id} classes={{}} onTouchTap={() => routerHistory.push(`/genre/${id}/show`)}>
              <ListItemIcon classes={{}}><IconStars/></ListItemIcon>
              <ListItemText classes={{}} primary={name} secondary={`${category.name}`}/>
            </ListItem>)
        }
      </List>
    </div>
  }
}

export default GenreListComponent