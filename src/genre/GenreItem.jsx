import React from 'react'
import {connect} from 'react-redux'
import {RaisedButton, FontIcon} from 'material-ui'
import {fetchItemGenre} from './GenreActions'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../app/components'

class GenreItem extends React.Component {

  constructor(props) {
    super(props)
    this.props.dispatch(fetchItemGenre(this.props.params.id))
  }

  render() {

    return (
      <div className="container">
        <AppHeader title={this.props.current.name}/>
        <pre className="text">{this.props.current.info}</pre>

        <br/>
        <br/>

        <RaisedButton
          primary={true}
          label="Edit"
          labelPosition="before"
          icon={<FontIcon className="material-icons">edit</FontIcon>}
          onTouchTap={() => this.props.router.push(`/genre/${this.props.params.id}/edit`)}
        />

        <AppFloatingActionButton route="/genre/list"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    current: store.genre.current,
  }
})(GenreItem)