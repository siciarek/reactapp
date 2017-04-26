import React from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import DatePicker from 'material-ui/DatePicker'

import ActionButton from "../app/ActionButton"
import config from '../app/config'

class SongEditorForm extends React.Component {

  defaultState = {
    errors: {
      createdAt: '',
      genre: '',
      title: '',
      lyrics: '',
    }
  }

  constructor(props, context) {
    super(props, context)

    this.state = {...this.defaultState, errors: {...this.defaultState.errors}}
  }

  updateDateValue = (event, value) => {
    const key = 'createdAt'
    const val = value

    this.props.updateEntity(key, val)
  }

  updateSelectValue = (component, index, value) => {
    const key = 'genre'
    const val = value === null || value.toString().trim().length === 0 ? null : value

    this.props.updateEntity(key, val)
  }

  updateValue = (event) => {
    const key = event.target.id
    let val = event.target.value === null || event.target.value.toString().trim().length === 0 ? null : event.target.value

    this.props.updateEntity(key, val)
  }

  remove = () => {
    this.props.removeEntity(this.props.current.id)
  }

  submit = () => {

    for (let key in this.defaultState.errors) {
      let temp = {...this.state}
      temp.errors[key] = (this.props.current[key] === null || this.props.current[key] === '')
        ? 'This field is requred'
        : ''
      this.setState({...temp})
    }

    if (JSON.stringify(this.state.errors) === JSON.stringify(this.defaultState.errors)) {
      this.props.saveEntity()
    }
  }

  render() {

    return (

      <form>

        <DatePicker
          id="createdAt"
          value={this.props.current.createdAt}
          errorText={this.state.errors.createdAt}
          floatingLabelText="Created at"
          onChange={this.updateDateValue}
          DateTimeFormat={global.Intl.DateTimeFormat}
          autoOk={true}
          locale={config.locale}
          hintText="Created at"
          fullWidth={true}
        />

        <SelectField
          id="genre"
          ref="genre"
          value={this.props.current.genre}
          errorText={this.state.errors.genre}
          floatingLabelText="Genre"
          fullWidth={true}
          onChange={this.updateSelectValue}
        >
          <MenuItem value={'Blues'} primaryText="Blues"/>
          <MenuItem value={'Ballad'} primaryText="Ballad"/>
          <MenuItem value={'Rock'} primaryText="Rock"/>
          <MenuItem value={'Jazz'} primaryText="Jazz"/>
          <MenuItem value={'Bossa nova'} primaryText="Bossa nova"/>
          <MenuItem value={'Folk'} primaryText="Folk"/>
          <MenuItem value={'Other'} primaryText="Other"/>
        </SelectField>

        <TextField
          id="title"
          value={this.props.current.title}
          errorText={this.state.errors.title}
          hintText="Insert the title"
          floatingLabelText="Title"
          fullWidth={true}
          onChange={this.updateValue}
        />

        <TextField
          id="lyrics"
          value={this.props.current.lyrics}
          errorText={this.state.errors.lyrics}
          hintText="Insert the lyrics"
          floatingLabelText="Lyrics"
          fullWidth={true}
          multiLine={true}
          rowsMax={8}
          onChange={this.updateValue}
        />

        <br/>
        <br/>

        <RaisedButton
          label="Save"
          labelPosition="before"
          primary={true}
          icon={<FontIcon className="material-icons">add_circle_outline</FontIcon>}
          onTouchTap={this.submit}
        />

        &nbsp;&nbsp;&nbsp;

        <RaisedButton
          style={{display: (this.props.current.id ? 'inline-block' : 'none')}}
          label="Remove"
          labelPosition="before"
          secondary={true}
          icon={<FontIcon className="material-icons">remove_circle_outline</FontIcon>}
          onTouchTap={this.remove}
        />

        <ActionButton route="/lyrics"/>
      </form>
    )
  }
}

export default SongEditorForm