import React from 'react'
import {List} from 'material-ui'
import config from '../config'
import {AppHeader, AppListItem} from '../components'

const ConfigInfo = () => <div>
  <AppHeader title="Config info"/>
  <List>
    {
      Object.keys(config).map(e => {
        return <AppListItem key={e} primaryText={e} secondaryText={config[e]}/>
      })
    }
  </List>
</div>

export default ConfigInfo