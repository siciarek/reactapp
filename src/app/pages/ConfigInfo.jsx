import React from 'react'
import AppHeader from "../components/AppHeader";

import config from '../config'
import AppListItem from "../components/AppListItem";
import {List} from 'material-ui/List'

function ConfigInfo(props) {

  return
  <div>
    <AppHeader title="Config info"/>
    <List>
      {
        Object.keys(config).map(function (e) {
          return <AppListItem key={e} primaryText={e} secondaryText={config[e]}/>
        })
      }
    </List>
  </div>
}

export default ConfigInfo