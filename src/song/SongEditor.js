import React from 'react'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import Header from '../app/Header'
import {addSong} from './SongActions'

class SongEditor extends React.Component {

  data = {
    id: null,
    title: null,
    lyrics: null,
  }

  updateValue(e) {
    this.data[e.target.id] = e.target.value.trim()
  }

  submit() {
    this.props.dispatch(addSong(this.data))
  }

  render() {

    return (

      <div className="container">
        <Header title="Add song"/>

        <TextField
          id="title"
          floatingLabelText="Title"
          fullWidth={true}
          onChange={(e) => this.updateValue(e)}
        />

        <TextField
          id="lyrics"
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
      </div>
    )
  }
}

export default connect((store) => {
  return {}
})(SongEditor);