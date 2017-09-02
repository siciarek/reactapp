import React from 'react'
import {connect} from 'react-redux'
import {MenuItem} from 'material-ui'
import {fetchListGenre} from '../GenreActions'

class GenreSelectField extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchListGenre(true))
  }

  onChange = (component, index, value) => {
    const temp = this.props.list.filter(item => {
      return item.id === value
    })

    const genre = temp.length > 0 ? temp[0] : null

    this.props.onChange('genre', genre)
  }

  render() {

    if(this.props.value === null) {
      return null
    }

    return null

  }
}

export default connect((store) => {
  return {
    list: store.genre.items,
  }
})(GenreSelectField)

