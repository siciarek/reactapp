import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {SelectField, MenuItem} from 'material-ui'
import config from '../../app/config'

class GenreCategorySelectField extends React.Component {

  constructor(params) {
    super(params)
    this.state = {
      items: []
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
        this.setState({items: JSON.parse(storage.getItem(key))})
      })
    }
    else {
     this.setState({items: JSON.parse(storage.getItem(key))})
    }
  }

  onChange = (component, index, value) => {
    const temp = this.state.items.filter((item) => {
      return item.id === value;
    })

    const val = temp.shift();
    this.props.onChange(val)
  }

  render() {

    if(typeof this.state.items.map !== 'function') {
      return null
    }

    return <SelectField
      floatingLabelText="Category"
      fullWidth={this.props.fullWidth}
      value={this.props.value}
      onChange={this.onChange}
    >
      {
        this.state.items.map((item) => {
          return <MenuItem key={item.id} value={item.id} primaryText={item.name}/>
        })
      }
    </SelectField>

  }
}

export default connect((store) => {
  return {}
})(GenreCategorySelectField)

