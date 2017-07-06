import React from 'react'
import {connect} from 'react-redux'
import {Button, FontIcon} from 'material-ui'
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

    const {name, info, description, category} = this.props.current

    const nameContent = name === null ? '' : name

    const infoContent = (info === null)
      ? <div className="empty">No info.</div>
      : <pre className="text">{info}</pre>

    const descriptionContent = (description === null)
      ? <div className="empty">No description.</div>
      : <div style={{color: 'teal'}}>{description}</div>

    return (
      <div>
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

        <Button raised
          color="primary"
          onTouchTap={() => this.props.router.push(`/genre/${this.props.params.id}/edit`)}
        >
          Edit
        </Button>

        <Button raised
          color="accent"
          onTouchTap={() => this.props.dispatch(removeGenre(this.props.params.id))}
          style={{marginLeft: 12, display: (this.props.current.id ? 'inline-block' : 'none')}}
        >
          Remove
        </Button>

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