import React from 'react'
import {connect} from 'react-redux'
import {TextField, RaisedButton, FontIcon} from 'material-ui'
import {AppHeader, AppFloatingActionButton} from '../app/components'
import {fetchItemGenre, saveGenre, removeGenre, updateGenre} from './GenreActions'

class GenreEditor extends React.Component {

  constructor(params) {
    super(params)
    this.state = {
      errors: {
        name: '',
        description: '',
        info: '',
      }
    }
  }

  componentWillMount() {
    if (this.props.params.hasOwnProperty('id')) {
      this.props.dispatch(fetchItemGenre(this.props.params.id))
    }
  }

  updateEntity = (key, value) => {
    let state = {...this.props.current}
    state[key] = value
    this.props.dispatch(updateGenre(state))
  }

  updateValue = (event) => {
    const key = event.target.id
    let val = event.target.value

    this.updateEntity(key, val)
  }

  submit = () => {
    const id = this.props.params.hasOwnProperty('id') ? this.props.params.id : null
    const state = {...this.props.current, id: id}
    this.props.dispatch(saveGenre(state))
  }

  remove = () => {
    if (this.props.params.hasOwnProperty('id')) {
      this.props.dispatch(removeGenre(this.props.params.id))
    }
  }

  render() {

    const title = this.props.current.id ? 'Edit genre' : 'Add genre'

    return (
      <div className="container">
        <AppHeader title={title}/>

        <form>
          <TextField
            id="name"
            value={this.props.current.name}
            errorText={this.state.errors.name}
            hintText="Insert the name"
            floatingLabelText="Name"
            fullWidth={true}
            onChange={this.updateValue}
          />

          <TextField
            id="description"
            value={this.props.current.description}
            errorText={this.state.errors.info}
            hintText="Insert the description"
            floatingLabelText="Description"
            fullWidth={true}
            onChange={this.updateValue}
          />

          <TextField
            id="info"
            value={this.props.current.info}
            errorText={this.state.errors.info}
            hintText="Insert info"
            floatingLabelText="Info"
            fullWidth={true}
            multiLine={true}
            rows={1}
            rowsMax={8}
            onChange={this.updateValue}
          />


          <br/>
          <br/>

          <RaisedButton
            primary={true}
            label="Save"
            labelPosition="before"
            icon={<FontIcon className="material-icons">add_circle_outline</FontIcon>}
            onTouchTap={this.submit}
          />

          <RaisedButton
            secondary={true}
            style={{marginLeft: 12, display: (this.props.current.id ? 'inline-block' : 'none')}}
            label="Remove"
            labelPosition="before"
            icon={<FontIcon className="material-icons">remove_circle_outline</FontIcon>}
            onTouchTap={this.remove}
          />

          <RaisedButton
            primary={true}
            style={{marginLeft: 12, display: (this.props.current.id ? 'inline-block' : 'none')}}
            label="Show"
            labelPosition="before"
            icon={<FontIcon className="material-icons">panorama_fish_eye</FontIcon>}
            onTouchTap={() => this.props.router.push(`/genre/${this.props.current.id}/show`)}
          />

          <AppFloatingActionButton route="/genre/list"/>
        </form>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    current: store.genre.current,
  }
})(GenreEditor)