import React from 'react'
import PropTypes from 'prop-types'

import {Avatar, IconButton, ListItem} from 'material-ui'
import ShowIcon from 'material-ui/svg-icons/action/visibility'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'
import RemoveIcon from 'material-ui/svg-icons/action/delete'

import './AppListItem.css'

export default class AppListItem extends React.Component {

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

    let props = {...this.props}

    let {editable, toolbarVisible, primaryText } = this.props

    let actions = editable === true && toolbarVisible === true ? {...props.actions} : {}

    // Remove props unsupported by ListItem
    Object.keys(AppListItem.propTypes).map(function (key) {
      return delete(props[key])
    })

    const buttons = Object.keys(actions).map(function (key, index) {
      return <IconButton key={index} tooltip={key.toUpperCase()} onTouchTap={actions[key]}>{icons[key]}</IconButton>
    })

    const initial = primaryText.substring(-1,1).toLocaleUpperCase()

    return <ListItem
      {...props}
      onTouchTap={this.handleTap}
      leftAvatar={<Avatar className={initial}>{initial}</Avatar>}
      rightAvatar={<span>{buttons}</span>}
    />
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
}
