import React from 'react'
import PropTypes from 'prop-types'
import {map} from 'lodash'
import List from 'material-ui/List'
import config from '../config'
import {AppHeader, AppListItem} from '../components'

const ConfigInfo = ({title}) => <div>
  <AppHeader title={title}/>
  <List>
    {map(config, (value, key) => <AppListItem key={key} primaryText={key} secondaryText={value}/>)}
  </List>
</div>

ConfigInfo.propTypes = {
  title: PropTypes.string.isRequired,
}

ConfigInfo.defaultProps = {
  title: 'Config info',
}

export default ConfigInfo
