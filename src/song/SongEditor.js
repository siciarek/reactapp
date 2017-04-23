import React from 'react'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import Header from '../app/Header'
import {addSong} from './SongActions'
import ActionButton from "../app/ActionButton";

class SongEditor extends React.Component {

  data = {
    id: null,
    genre: null,
    title: null,
    lyrics: null,
  }

  defaultState = {
    errors: {
      title: '',
      lyrics: '',
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      genre: null,
      errors: {
        title: '',
        lyrics: '',
      }
    }
  }

  updateSelectValue = (event, index, value) => this.setState({genre: value});

  updateValue(event) {
    const key = event.target.id
    const value = event.target.value === null || event.target.value.trim().length === 0 ? null : event.target.value.trim()

    // TODO: use this.state
    this.data[key] = value
  }

  submit() {

    this.setState({
      errors: {
        title: '',
        lyrics: '',
      }
    })

    let fields = [
      {
        name: 'genre'
      },
      {
        name: 'title'
      },
      {
        name: 'lyrics'
      },
    ]

    for (let i = 0; i < fields.length; i++) {
      let key = fields[i].name
      let temp = {...this.state}

      temp.errors[key] = (this.data[key] === null || this.data[key].trim().length === 0)
        ? 'This field is requred'
        : ''

      this.setState({...temp})
    }

    if (JSON.stringify(this.state.errors) === JSON.stringify(this.defaultState.errors)) {
      this.props.dispatch(addSong(this.data))
    }
  }

  render() {

    return (

      <div className="container">
        <Header title="Add song"/>
        <form>
          <SelectField
            floatingLabelText="Genre"
            fullWidth={true}
            ref="genre"
            id="genre"
            errorText={this.state.errors.genre}
            value={this.state.genre}
            onChange={this.updateSelectValue}
          >
            <MenuItem value={1} primaryText="Blues" />
            <MenuItem value={2} primaryText="Rock" />
            <MenuItem value={3} primaryText="Jazz" />
            <MenuItem value={4} primaryText="Bossa nova" />
            <MenuItem value={5} primaryText="Folk" />
            <MenuItem value={6} primaryText="Other" />
          </SelectField>

          <TextField
            ref="title"
            id="title"
            errorText={this.state.errors.title}
            hintText="Insert the title"
            floatingLabelText="Title"
            fullWidth={true}
            onChange={(e) => this.updateValue(e)}
          />

          <TextField
            ref="lyrics"
            id="lyrics"
            errorText={this.state.errors.lyrics}
            hintText="Insert the lyrics"
            floatingLabelText="Lyrics"
            fullWidth={true}
            multiLine={true}
            rowsMax={11}
            onChange={(e) => this.updateValue(e)}
          />

          <br/>
          <br/>

          <RaisedButton
            label="Save"
            labelPosition="before"
            primary={true}
            icon={ <FontIcon className="material-icons">add_circle_outline</FontIcon>}
            onTouchTap={() => this.submit()}
          />
          <ActionButton route="/lyrics"/>
        </form>
      </div>
    )
  }
}

export default connect(
  (store) => {
    return {
      data: store.lyrics.current,
    }
  }
)(SongEditor);