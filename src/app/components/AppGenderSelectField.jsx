import React from 'react'
import axios from 'axios'
import queryString from 'query-string'
import {SelectField, MenuItem} from 'material-ui'
import config from '../../app/config'

class AppGenderSelectField extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentWillMount() {

    const key = 'gender'
    const storage = localStorage

    if(storage.getItem(key) === null) {
      const url = `${config.dictionaryUrl}?${queryString.stringify({name: key})}`

      axios.get(url)
      .then((response) => {
        storage.setItem(key, JSON.stringify(response.data))
      })
      .then(() => {
        this.setState({items: JSON.parse(storage.getItem(key))})
      })
    }
    else {
     this.setState({items: JSON.parse(storage.getItem(key))})
    }
  }

  render() {

    if(typeof this.state.items.map !== 'function') {
      return null
    }

    return <SelectField
      {...this.props}
    >
      {
        this.state.items.map(item => {
          return <MenuItem
            key={item.value}
            value={item.value}
            primaryText={item.name}
          />
        })
      }
    </SelectField>

  }
}

AppGenderSelectField.defaultProps = {
  floatingLabelText: 'Gender',
}

export default AppGenderSelectField

