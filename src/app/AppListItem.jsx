import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ListItem} from 'material-ui/List';
import ShowIcon from 'material-ui/svg-icons/action/visibility'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'
import RemoveIcon from 'material-ui/svg-icons/action/delete'
import IconButton from 'material-ui/IconButton';

export default class AppListItem extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
  }

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  render() {


    let props = {...this.props}


    const icons = {
      show: (<ShowIcon/>),
      edit: (<EditIcon/>),
      remove: (<RemoveIcon/>),
    }

    let actions = {...props.actions}

    // Remove props unsupported by ListItem
    Object.keys(AppListItem.propTypes).map(function (prop) {
      return delete(props[prop])
    })

    const temp = Object.keys(actions).map(function (key, index) {
      return <IconButton key={index} tooltip={key.toUpperCase()} onTouchTap={() => {
        actions[key]()
      }}>
        {icons[key]}
      </IconButton>
    })

    const buttonBar = (<span style={{display: (this.state.open ? 'block' : 'none')}}>{temp}</span>)

    return (
      <ListItem {...props} onTouchTap={() => this.setState({open: !this.state.open})} rightAvatar={buttonBar}/>
    )
  }
}
