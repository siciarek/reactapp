import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui-icons/Theaters'
import {AppHeader, AppSpinner} from '../../app/components'

class VideoList extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    const {title, items} = this.props

    return <div>
      <AppHeader title={title}/>
      <AppSpinner/>
      <List>
        {
          items.map(item => {
            return <ListItem
              leftIcon={<ListItemIcon/>}
              containerElement={<Link to={`/video/${item.id}`}/>}
              key={item.id}
              primaryText={item.title}
              secondaryText={`results: ${item.videoCount}`}
            />
          })
        }
      </List>
    </div>
  }
}

VideoList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}

VideoList.defaultProps = {
  title: 'Video',
  items: [],
}

export default VideoList