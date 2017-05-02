import React, {Component} from 'react'
import AppHeader from "../AppHeader";

import config from '../config'
import AppListItem from "../AppListItem";
import {List} from 'material-ui/List'

export default class ConfigInfo extends Component {

  render() {

    return (
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
    )
  }
}
