import React from 'react'
import PropTypes from 'prop-types'
import {List, ListItem, ListItemText, ListItemIcon} from 'material-ui'
import ItemIcon from 'material-ui-icons/VolumeUp'
import AppHeader from '../../app/widgets/AppHeader'
import AppSpinner from '../../app/widgets/AppSpinner'
import AppFloatingActionButton from '../../app/widgets/AppFloatingActionButton'

class VideoList extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {title, items, icon, goto, router} = this.props

    if(!items) {
      return null
    }

    return <div>
      <AppHeader title={title}/>
      <AppFloatingActionButton action={() => router.push('/')}/>
      <AppSpinner/>
      <List>
        {
          items.map((item, index) => <ListItem button classes={{}} key={index} onTouchTap={() => goto(item.id)}>
              <ListItemIcon classes={{}}>{icon}</ListItemIcon>
              <ListItemText classes={{}} primary={item.title} secondary={`items: ${item.videoCount}`}/>
            </ListItem>
          )
        }
      </List>
    </div>
  }
}

VideoList.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  init: PropTypes.func.isRequired,
  goto: PropTypes.func.isRequired,
}

VideoList.defaultProps = {
  title: 'Video',
  icon: <ItemIcon/>,
  init: () => {},
  goto: () => {},
}

export default VideoList