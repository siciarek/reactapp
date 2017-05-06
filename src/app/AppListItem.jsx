import React from 'react'
import PropTypes from 'prop-types'

import {ListItem, IconButton} from 'material-ui'
import ShowIcon from 'material-ui/svg-icons/action/visibility'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'
import RemoveIcon from 'material-ui/svg-icons/action/delete'

export default class AppListItem extends React.Component {

  static propTypes = {
    actions: PropTypes.shape({
      show: PropTypes.func,
      edit: PropTypes.func,
      remove: PropTypes.func
    }),
    toolbarVisible: PropTypes.bool.isRequired,
    editable: PropTypes.bool.isRequired,
    selectFunction: PropTypes.func.isRequired,
  }

  static defaultProps = {
    editable: false,
  }

  handleTap = () => {

    if (this.props.editable === false) {
      if (this.props.actions.hasOwnProperty('show') === true) {
        this.props.actions.show()
      }
    }
    else {
      // Toggle toolbar visibility
      this.props.selectFunction(this.props.toolbarVisible ? 0 : this.props.id)
    }
  }

  render() {

    const icons = {
      show: (<ShowIcon/>),
      edit: (<EditIcon/>),
      remove: (<RemoveIcon/>),
    }

    let props = {...this.props}

    let actions = this.props.editable === true && this.props.toolbarVisible === true ? {...props.actions} : {}

    // Remove props unsupported by ListItem
    Object.keys(AppListItem.propTypes).map(function (key) {
      return delete(props[key])
    })

    const buttons = Object.keys(actions).map(function (key, index) {
      return <IconButton key={index} tooltip={key.toUpperCase()} onTouchTap={actions[key]}>{icons[key]}</IconButton>
    })

    return <ListItem {...props} onTouchTap={this.handleTap} rightAvatar={<span>{buttons}</span>}/>
  }
}
