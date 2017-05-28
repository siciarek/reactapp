import React from 'react'
import {connect} from 'react-redux'
import {RaisedButton, FontIcon, Paper} from 'material-ui'
import {fetchItemGenre} from './GenreActions'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../app/components'

class GenreItem extends React.Component {

  constructor(props) {
    super(props)
    this.props.dispatch(fetchItemGenre(this.props.params.id))
  }

  render() {

    const {name, info} = this.props.current;

    if (this.props.fetching) {
      return <AppSpinner/>
    }

    const content = (info === null)
      ? <Paper style={{padding: 16}} zDepth={2}>No info.</Paper>
      : <pre className="text">{info}</pre>

    return (
      <div className="container">
        <AppHeader title={name}/>

        {content}

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