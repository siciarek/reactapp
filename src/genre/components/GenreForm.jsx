import React from 'react'
import {withRouter} from 'react-router'
import {TextField, RaisedButton, FontIcon} from 'material-ui'
import {GenreCategorySelectField}  from './index'
import {saveGenre, updateGenre, removeGenre} from '../GenreActions'

class GenreForm extends React.Component {

  initialState = {
    open: false,
    errors: {
      category: '',
      name: '',
      description: '',
      info: '',
    }
  }

  constructor(params) {
    super(params)

    this.state = {...this.initialState, errors: {...this.initialState.errors}}
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

  remove = () => {
    if (this.props.params.hasOwnProperty('id')) {
      this.props.dispatch(removeGenre(this.props.params.id))
    }
  }

  submit = () => {
    const id = this.props.params.hasOwnProperty('id') ? this.props.params.id : null
    const state = {...this.props.current, id: id}

    for (let key in this.initialState.errors) {
      let temp = {...this.state}
      temp.errors[key] = key === 'name'  && (this.props.current[key] === null || this.props.current[key] === '')
        ? 'This field is requred'
        : ''

      if(key === 'category') {
        temp.errors[key] = key === 'category' && this.props.current[key].id === 0
          ? 'This field is requred'
          : ''
      }

      this.setState({...temp})
    }

    if (JSON.stringify(this.state.errors) === JSON.stringify(this.initialState.errors)) {
      this.props.dispatch(saveGenre(this.props.current))
    }
  }

  render() {

    if(this.props.current.hasOwnProperty('id') === false) {
      return null
    }

    return (
      <div>

        <form>

          <GenreCategorySelectField
            value={this.props.current.category.id}
            errorText={this.state.errors.category}
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
        </form>
      </div>
    )
  }
}

export default withRouter(GenreForm)