import React from 'react'
import PropTypes from 'prop-types'
import List from 'material-ui/List'
import config from '../config'
import {AppHeader, AppListItem} from '../components'

const ConfigInfo = ({title}) => <div>
  <AppHeader title={title}/>
  <List>
    {
      Object.keys(config).map(e => {
        return <AppListItem key={e} primaryText={e} secondaryText={config[e]}/>
      })
    }
  </List>
</div>

ConfigInfo.propTypes = {
  title: PropTypes.string.isRequired,
}

ConfigInfo.defaultProps = {
  title: 'Config info',
}

export default ConfigInfo
