import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import ListItemIcon from 'material-ui/svg-icons/av/fiber-manual-record'
import {List, ListItem} from 'material-ui'
import {AppSimpleList, AppHeader, AppSpinner} from '../components'

class AppSimpleComponentList extends React.Component {

  componentWillMount() {
    this.props.fetchList()
  }

  render() {
    return <AppSimpleList {...this.props}/>
  }
}

export default AppSimpleComponentList