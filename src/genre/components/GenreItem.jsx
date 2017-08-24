import React from 'react'
import {Button} from 'material-ui'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../../app/widgets'

class GenreItem extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {

    if(this.props.processing === true) {
      return <AppSpinner/>
    }

    const {name, info, description, category} = this.props.item

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
          onTouchTap={() => this.props.removeItem(this.props.params.id)}
          style={{marginLeft: 12, display: (this.props.item.id ? 'inline-block' : 'none')}}
        >
          Remove
        </Button>

        <AppFloatingActionButton action={() => this.props.router.push('genre/list')}/>
      </div>
    )
  }
}

export default GenreItem