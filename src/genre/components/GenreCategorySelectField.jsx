import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {SelectField, MenuItem} from 'material-ui'
import config from '../../app/config'
import AppStash from '../../app/AppStash'

class GenreCategorySelectField extends React.Component {

  constructor(params) {
    super(params)
    this.state = {
      categories: []
    }
  }

  componentWillMount() {

    const key = 'genrecategory'
    const storage = localStorage

    if(storage.getItem(key) === null) {
      axios.get(config.genreCategoryUrl)
      .then((response) => {
        storage.setItem(key, JSON.stringify(response.data))
      })
      .then(() => {
        this.setState({categories: JSON.parse(storage.getItem(key))})
      })
    }
    else {
     this.setState({categories: JSON.parse(storage.getItem(key))})
    }
  }

  onChange = (component, index, value) => {
    const temp = this.state.categories.filter((item) => {
      return item.id === value;
    })

    const val = temp.shift();
    this.props.onChange(val)
  }

  render() {

    if(typeof this.state.categories.map !== 'function') {
      return null
    }

    return <SelectField
      floatingLabelText="Category"
      fullWidth={true}
      value={this.props.value}
      onChange={this.onChange}
    >
      {
        this.state.categories.map((item) => {
          return <MenuItem key={item.id} value={item.id} primaryText={item.name}/>
        })
      }
    </SelectField>

  }
}

export default connect((store) => {
  return {}
})(GenreCategorySelectField)

