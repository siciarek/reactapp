import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'
import {ListItem, ListItemAvatar, ListItemText} from 'material-ui/List'
import ShowIcon from 'material-ui-icons/Visibility'
import EditIcon from 'material-ui-icons/ModeEdit'
import RemoveIcon from 'material-ui-icons/Delete'

import './AppListItem.css'

class AppListItem extends React.Component {

  handleTap = () => {

    const {editable, actions, toolbarVisible, selectFunction, id} = this.props

    if (editable === false) {
      if (actions.hasOwnProperty('show') === true) {
        actions.show()
      }
    }
    else {
      // Toggle toolbar visibility
      selectFunction(toolbarVisible ? 0 : id)
    }
  }

  render() {

    const icons = {
      show: (<ShowIcon/>),
      edit: (<EditIcon/>),
      remove: (<RemoveIcon/>),
    }

    const {editable, toolbarVisible, primaryText, secondaryText} = this.props

    const actions = editable === true && toolbarVisible === true ? {...this.props.actions} : {}

    let props = {...this.props}

    // Remove props unsupported by ListItem
    Object.keys(AppListItem.propTypes).map((key) => {
      return delete(props[key])
    })

    const buttons = Object.keys(actions).map((key, index) => {
      return <IconButton
        key={index}
        tooltip={key.toUpperCase()}
        onTouchTap={actions[key]}>
        {icons[key]}
      </IconButton>
    })

    const initial = primaryText ? primaryText.substring(-1, 1).toLocaleUpperCase() : '?'

    return <ListItem button classes={{}} key={primaryText} onTouchTap={this.handleTap}>
      <Avatar classes={{}} className={'initial'}>{initial}</Avatar>
      <ListItemText classes={{}} primary={primaryText} secondary={secondaryText}/>
    </ListItem>

    // return <ListItem
    //   {...props}
    //   onTouchTap={this.handleTap}
    //   // leftAvatar={<Avatar className={'initial'}>{initial}</Avatar>}
    //   // rightAvatar={<span>{buttons}</span>}
    // />
  }
}

AppListItem.propTypes = {
  actions: PropTypes.shape({
    show: PropTypes.func,
    edit: PropTypes.func,
    remove: PropTypes.func
  }),
  toolbarVisible: PropTypes.bool.isRequired,
  editable: PropTypes.bool.isRequired,
  selectFunction: PropTypes.func.isRequired,
}

AppListItem.defaultProps = {
  editable: false,
  actions: {},
  toolbarVisible: false,
  selectFunction: event => console.log(event)
}

export default AppListItem