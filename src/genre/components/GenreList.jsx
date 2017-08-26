import React from 'react'
import PropTypes from 'prop-types'
import {browserHistory as router} from 'react-router'
import List, {ListItem, ListItemText, ListItemIcon} from 'material-ui/List'
import IconStars from 'material-ui-icons/Stars'
import IconAdd from 'material-ui-icons/Add'
import {Pager, AppHeader, AppSpinner, AppFloatingActionButton} from '../../app/widgets'
class GenreList extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {
      items,
      title,
      location: {query: {page = 1}},
      totalPages,
      gotoNextPage,
      gotoPrevPage} = this.props

    if(typeof items.map !== 'function') {
      return null
    }

    const listItems = items.map(({id, name, category}) =>
      <ListItem button key={id} classes={{}} onTouchTap={() => router.push(`/genre/${id}/show`)}>
        <ListItemIcon classes={{}}><IconStars/></ListItemIcon>
        <ListItemText classes={{}} primary={name} secondary={`${category.name}`}/>
      </ListItem>)

    return <div>
      <AppHeader title={title}/>
      <AppFloatingActionButton icon={<IconAdd/>} action={() => router.push('/genre/new')}/>
      <AppSpinner/>
      <Pager page={parseInt(page)}
             totalPages={totalPages}
             handleBack={gotoPrevPage}
             handleNext={gotoNextPage}
      />
      <List>
        {listItems}
      </List>
    </div>
  }
}

GenreList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

GenreList.defaultProps = {
  title: 'Genre',
  items: [],
  location: {
    query: {
      page: 1,
    }
  }
}

export default GenreList