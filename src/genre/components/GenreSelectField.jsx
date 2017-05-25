import React from 'react'
import {connect} from 'react-redux'
import {SelectField, MenuItem} from 'material-ui'
import {fetchListGenre} from '../GenreActions'
import PropTypes from 'prop-types'

class GenreSelectField extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchListGenre(true))
  }

  onChange = (component, index, value) => {
    const temp = this.props.list.filter((item) => {
      return item.id === value
    })

    const genre = temp.length > 0 ? temp[0] : null

    this.props.onChange('genre', genre)
  }

  render() {

    if(this.props.value === null) {
      return null
    }

    return <SelectField
      id="genre"
      floatingLabelText="Genre"
      fullWidth={true}
      value={this.props.value.id}
      errorText={this.props.errorText}
      onChange={this.onChange}
    >
      {
        this.props.list.map((item) => {
          return <MenuItem key={item.id} value={item.id} primaryText={item.name} />
        })
      }
    </SelectField>

  }
}

export default connect((store) => {
  return {
    list: store.genre.items,
  }
})(GenreSelectField)

