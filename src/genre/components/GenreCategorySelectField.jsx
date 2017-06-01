import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {SelectField, MenuItem} from 'material-ui'
import config from '../../app/config'

class GenreCategorySelectField extends React.Component {

  constructor(params) {
    super(params)
    this.state = { categories: [] }
  }

  componentWillMount() {
    axios.get(config.genreCategoryUrl)
    .then((response) => {
      this.setState({categories: response.data})
    })
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

