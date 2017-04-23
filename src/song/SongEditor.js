import React from 'react'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import Header from '../app/Header'
import {addSong} from './SongActions'
import ActionButton from "../app/ActionButton";

class SongEditor extends React.Component {

  data = {
    id: null,
    title: null,
    lyrics: null,
  }

  defaultState = {
    errors: {
      title: '',
      lyrics: '',
    }
  }

  fields = [
    {
      name: 'title'
    },
    {
      name: 'lyrics'
    },
  ]

  constructor(props) {
    super(props)
    this.state = {
      errors: {
        title: '',
        lyrics: '',
      }
    }
  }

  updateValue(e) {
    this.data[e.target.id] = e.target.value.trim()
  }

  submit() {
    this.setState({
      errors: {
        title: '',
        lyrics: '',
      }
    })

    let temp = {...this.state}

    if (this.data.title === null || this.data.title.trim().length === 0) {
      temp.errors.title = 'This field is requred'
    }
    else {
      temp.errors.title = ''
    }
    this.setState({...temp})


    temp = {...this.state}
    if (this.data.lyrics === null || this.data.lyrics.trim().length === 0) {
      temp.errors.lyrics = 'This field is requred'
    }
    else {
      temp.errors.lyrics = ''
    }

    this.setState({...temp})

    if (JSON.stringify(this.state) === JSON.stringify(this.defaultState)) {
      this.props.dispatch(addSong(this.data))
    }
  }

  render() {

    return (

      <div className="container">
        <Header title="Add song"/>
        <form>
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
    return {}
  }
)(SongEditor);