import React from 'react'
import {withRouter} from 'react-router'
import {TextField, RaisedButton, FontIcon} from 'material-ui'
import {GenreCategorySelectField}  from './index'
import {saveGenre, updateGenre, removeGenre} from '../GenreActions'

class GenreForm extends React.Component {

  DEFAULT_STATE = {
    errors: {
      category: '',
      name: '',
    },
    validators: {
      name: (val) => {
        return val === null || val.trim() === ''
          ? 'This field is required.'
          : ''
      },
      category: (val) => {
        return val.id === 0
          ? 'No category was chosen.'
          : ''
      },
    }
  }

  constructor(props) {
    super(props)

    this.state = {...this.DEFAULT_STATE, errors: {...this.DEFAULT_STATE.errors}}
  }

  validate = () => {
    let temp = {...this.state}
    for (let key in this.DEFAULT_STATE.errors) {
      temp.errors[key] = temp.validators[key](this.props.item[key])
    }
    this.setState({...temp})
  }

  updateEntity = (key, value) => {
    this.props.dispatch(updateGenre({...this.props.item, [key]: value}))
    this.validate()
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

    this.validate()

    if (JSON.stringify(this.state.errors) === JSON.stringify(this.DEFAULT_STATE.errors)) {
      this.props.dispatch(saveGenre(this.props.item))
    }
  }

  render() {

    if (this.props.item.hasOwnProperty('id') === false) {
      return null
    }

    return (
      <div>

        <form>

          <GenreCategorySelectField
            value={this.props.item.category.id}
            errorText={this.state.errors.category}
            fullWidth={true}
            onChange={this.updateCategory}
          />

          <TextField
            id="name"
            defaultValue={this.props.item.name}
            errorText={this.state.errors.name}
            hintText="Insert the name"
            floatingLabelText="Name"
            fullWidth={true}
            onChange={this.updateValue}
          />

          <TextField
            id="description"
            defaultValue={this.props.item.description}
            errorText={this.state.errors.info}
            hintText="Insert the description"
            floatingLabelText="Description"
            fullWidth={true}
            onChange={this.updateValue}
          />

          <TextField
            id="info"
            defaultValue={this.props.item.info}
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
            style={{marginLeft: 12, display: (this.props.item.id ? 'inline-block' : 'none')}}
            label="Remove"
            labelPosition="before"
            icon={<FontIcon className="material-icons">remove_circle_outline</FontIcon>}
            onTouchTap={this.remove}
          />

          <RaisedButton
            primary={true}
            style={{marginLeft: 12, display: (this.props.item.id ? 'inline-block' : 'none')}}
            label="Show"
            labelPosition="before"
            icon={<FontIcon className="material-icons">panorama_fish_eye</FontIcon>}
            onTouchTap={() => this.props.router.push(`/genre/${this.props.item.id}/show`)}
          />

          <RaisedButton
            primary={true}
            style={{marginLeft: 12, display: (this.props.item.id ? 'inline-block' : 'none')}}
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