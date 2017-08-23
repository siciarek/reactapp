import React from 'react'
import PropTypes from 'prop-types'
import {List, ListItem, ListItemText, ListItemIcon} from 'material-ui'
import ItemIcon from 'material-ui-icons/VolumeUp'
import AppHeader from '../../app/components/AppHeader'
import AppSpinner from '../../app/components/AppSpinner'
import AppFloatingActionButton from '../../app/components/AppFloatingActionButton'

class AudioList extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {title, items, icon, goto, router} = this.props

    if (typeof items.map !== 'function') {
      return null
    }

    return <div>
      <AppHeader title={title}/>
      <AppFloatingActionButton action={() => router.push('/')}/>
      <AppSpinner/>
      <List>
        {
          items.map(({id, title, audioCount}) => (
              <ListItem button classes={{}} key={id} onTouchTap={() => goto(id)}>
                <ListItemIcon classes={{}}>
                  {icon}
                </ListItemIcon>
                <ListItemText classes={{}} primary={title} secondary={`items: ${audioCount}`}/>
              </ListItem>
            )
          )
        }
      </List>
    </div>
  }
}

AudioList.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  init: PropTypes.func.isRequired,
  goto: PropTypes.func.isRequired,
}

AudioList.defaultProps = {
  title: 'Audio',
  icon: <ItemIcon/>,
  init: () => {
  },
  goto: () => {
  },
}

export default AudioList