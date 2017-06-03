import React from 'react'
import {connect} from 'react-redux'
import {RaisedButton, FontIcon} from 'material-ui'
import {fetchItemGenre, removeGenre} from './GenreActions'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../app/components'

class GenreItem extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchItemGenre(this.props.params.id))
  }

  render() {

    if(this.props.processing === true) {
      return <AppSpinner/>
    }

    const {name, info, description, category} = this.props.current;

    const nameContent = name === null ? '' : name

    const infoContent = (info === null)
      ? <div className="empty">No info.</div>
      : <pre className="text">{info}</pre>

    const descriptionContent = (description === null)
      ? <div className="empty">No description.</div>
      : <div style={{color: 'teal'}}>{description}</div>

    return (
      <div className="container">
        <AppSpinner/>

        <AppHeader title={nameContent}/>

        <br/>

        <div>Category: {typeof category.name === 'undefined' ? '' : category.name}</div>

        <br/>

        {descriptionContent}

        <br/>

        {infoContent}

        <br/>
        <br/>

        <RaisedButton
          primary={true}
          label="Edit"
          labelPosition="before"
          icon={<FontIcon className="material-icons">edit</FontIcon>}
          onTouchTap={() => this.props.router.push(`/genre/${this.props.params.id}/edit`)}
        />

        <RaisedButton
          secondary={true}
          style={{marginLeft: 12, display: (this.props.current.id ? 'inline-block' : 'none')}}
          label="Remove"
          labelPosition="before"
          icon={<FontIcon className="material-icons">remove_circle_outline</FontIcon>}
          onTouchTap={() => this.props.dispatch(removeGenre(this.props.params.id))}
        />

        <AppFloatingActionButton route="/genre/list"/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    processing: store.app.processing,
    current: store.genre.current,
  }
})(GenreItem)