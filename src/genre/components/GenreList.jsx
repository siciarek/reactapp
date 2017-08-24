import React from 'react'
import PropTypes from 'prop-types'
import {browserHistory as routerHistory} from 'react-router'
import List, {ListItem, ListItemText, ListItemIcon} from 'material-ui/List'
import IconStars from 'material-ui-icons/Stars'
import IconAdd from 'material-ui-icons/Add'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../../app/components'

class GenreList extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {items, title} = this.props

    if(typeof items.map !== 'function') {
      return null
    }

    return <div>
      <AppHeader title={title}/>
      <AppFloatingActionButton icon={<IconAdd/>} action={() => routerHistory.push('/genre/new')}/>
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

GenreList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

GenreList.defaultProps = {
  title: 'Bim',
  items: [],
}

export default GenreList