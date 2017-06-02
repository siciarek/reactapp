import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {TextField, RaisedButton, FontIcon} from 'material-ui'
import {AppHeader, AppFloatingActionButton, AppSpinner} from '../app/components'
import {GenreCategorySelectField}  from './components'
import {fetchItemGenre, saveGenre, removeGenre, updateGenre} from './GenreActions'

class GenreEditor extends React.Component {

  constructor(params) {
    super(params)

    this.state = {
      errors: {
        category: '',
        name: '',
        description: '',
        info: '',
      }
    }
  }

  componentWillMount() {
    const id = this.props.router.params.hasOwnProperty('id')
      ? this.props.router.params.id
      : null

    if(id !== null) {
      this.props.dispatch(fetchItemGenre(id))
    }
  }

  updateEntity = (key, value) => {
    let state = {...this.props.current}
    state[key] = value
    this.props.dispatch(updateGenre(state))
  }

  updateValue = event => {
    const key = event.target.id
    let value = event.target.value

    this.updateEntity(key, value)
  }

  updateCategory = (value, key = 'category') => {
    this.updateEntity(key, value)
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
    const categoryId = this.props.current.category ? this.props.current.category.id : 0

    return (
      <div className="container">
        <AppSpinner/>

        <AppHeader title={title}/>

        <form>

          <GenreCategorySelectField
            value={categoryId}
            fullWidth={true}
            onChange={this.updateCategory}
          />

          <TextField
            id="name"
            defaultValue={this.props.current.name}
            errorText={this.state.errors.name}
            hintText="Insert the name"
            floatingLabelText="Name"
            fullWidth={true}
            onChange={this.updateValue}
          />

          <TextField
            id="description"
            defaultValue={this.props.current.description}
            errorText={this.state.errors.info}
            hintText="Insert the description"
            floatingLabelText="Description"
            fullWidth={true}
            onChange={this.updateValue}
          />

          <TextField
            id="info"
            defaultValue={this.props.current.info}
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

          <RaisedButton
            primary={true}
            style={{marginLeft: 12, display: (this.props.current.id ? 'inline-block' : 'none')}}
            label="New"
            labelPosition="before"
            icon={<FontIcon className="material-icons">add_circle_outline</FontIcon>}
            onTouchTap={() => {
              this.props.router.push('/genre/new')
            }}
          />

          <AppFloatingActionButton route="/genre/list"/>
        </form>
      </div>
    )
  }
}

export default connect((store) => {

  return {
    category: store.genre.current.category,
    current: store.genre.current,
  }
})(withRouter(GenreEditor))