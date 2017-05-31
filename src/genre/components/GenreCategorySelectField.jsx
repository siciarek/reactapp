import React from 'react'
import {connect} from 'react-redux'
import {SelectField, MenuItem} from 'material-ui'

class GenreCategorySelectField extends React.Component {

  constructor(params) {
    super(params)

    this.state = {
      categories: [
        {id: 0, name: 'Unknown'},
        {id: 1, name: 'African'},
        {id: 2, name: 'Asian'},
        {id: 3, name: 'East Asian'},
        {id: 4, name: 'South and southeast Asian'},
        {id: 5, name: 'Avant-garde'},
        {id: 6, name: 'Blues'},
        {id: 7, name: 'Caribbean and Caribbean-influenced'},
        {id: 8, name: 'Comedy'},
        {id: 9, name: 'Country'},
        {id: 10, name: 'Easy listening'},
        {id: 11, name: 'Electronic'},
        {id: 12, name: 'Folk'},
        {id: 13, name: 'Hip hop'},
        {id: 14, name: 'Jazz'},
        {id: 15, name: 'Latin'},
        {id: 16, name: 'Pop'},
        {id: 17, name: 'R&B and soul'},
        {id: 18, name: 'Rock'},
      ],
    }
  }

  componentWillMount() {

  }

  onChange = (component, index, value) => {
    const temp = this.state.categories.filter((item) => {
      return item.id === value;
    })

    const val  = temp.shift();
    this.props.onChange(val)
  }

  render() {

    const list = this.state.categories

    return <SelectField
      floatingLabelText="Category"
      fullWidth={true}
      value={this.props.value}
      onChange={this.onChange}
    >
      {
        list.map((item) => {
          return <MenuItem key={item.id} value={item.id} primaryText={item.name}/>
        })
      }
    </SelectField>

  }
}

export default connect((store) => {
  return {

  }
})(GenreCategorySelectField)

