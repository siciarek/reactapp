import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {SelectField, MenuItem, TextField, RaisedButton, FontIcon} from 'material-ui'
import {AppHeader, AppFloatingActionButton, AppSpinner} from '../app/components'
import {fetchItemGenre, saveGenre, removeGenre, updateGenre} from './GenreActions'

class GenreEditor extends React.Component {

  constructor(params) {
    super(params)

    this.state = {
      categories: [
        {id: 0, name: 'Unknown'},
        {id: 1, name: 'African'},
        {id: 2, name: 'Asian'},
        {id: 3, name: 'East Asian'},
        {id: 4, name: 'South and southeast Asian'},
        {id: 5, name: 'Avant-garde'},
        {id: 6, name: 'Blues'},
        {id: 7, name: 'Caribbean and Caribbean-influenced'},
        {id: 8, name: 'Comedy'},
        {id: 9, name: 'Country'},
        {id: 10, name: 'Easy listening'},
        {id: 11, name: 'Electronic'},
        {id: 12, name: 'Folk'},
        {id: 13, name: 'Hip hop'},
        {id: 14, name: 'Jazz'},
        {id: 15, name: 'Latin'},
        {id: 16, name: 'Pop'},
        {id: 17, name: 'R&B and soul'},
        {id: 18, name: 'Rock'},
      ],

      errors: {
        name: '',
        description: '',
        info: '',
      }
    }
  }

  componentWillMount() {
    const id = this.props.router.params.hasOwnProperty('id') ? this.props.router.params.id : null
    this.props.dispatch(fetchItemGenre(id))
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

  updateSelectedValue = (component, index, value) => {
    const key = 'category'

    const temp = this.state.categories.filter((item) => {
      return item.id === value;
    })
    const val = temp.shift();

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
    const categoryId = this.props.current.category ? this.props.current.category.id : 0
    const categories = this.state.categories;

    return (
      <div className="container">
        <AppSpinner/>

        <AppHeader title={title}/>

        <form>

          <SelectField
            id="category"
            floatingLabelText="Category"
            fullWidth={true}
            value={categoryId}
            onChange={this.updateSelectedValue}
          >
            {
              categories.map((item, index) => {
                return <MenuItem key={index} value={item.id} primaryText={item.name} />
              })
            }
          </SelectField>

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