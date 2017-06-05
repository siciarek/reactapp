import React from 'react'
import PropTypes from 'prop-types'
import {TextField, RaisedButton, FontIcon, DatePicker, FlatButton, Dialog} from 'material-ui'
import AppFloatingActionButton from '../app/components/AppFloatingActionButton'
import {GenreSelectField} from '../genre/components'

class SongEditorForm extends React.Component {

  static propTypes = {
    current: PropTypes.object.isRequired,
    updateEntity: PropTypes.func.isRequired,
    saveEntity: PropTypes.func.isRequired,
    removeEntity: PropTypes.func.isRequired,
  }

  initialState = {
    open: false,
    errors: {
      createdAt: '',
      genre: '',
      title: '',
      lyrics: '',
    }
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  constructor(props, context) {
    super(props, context)

    this.state = {...this.initialState, errors: {...this.initialState.errors}}
  }

  updateDateValue = (event, value) => {
    const key = 'createdAt'
    const val = value

    this.props.updateEntity(key, val)
  }

  updateValue = (event) => {
    const key = event.target.id
    let val = event.target.value

    this.props.updateEntity(key, val)
  }

  remove = () => {
    this.handleOpen()
  }

  submit = () => {

    for (let key in this.initialState.errors) {
      let temp = {...this.state}
      temp.errors[key] = (this.props.current[key] === null || this.props.current[key] === '')
        ? 'This field is requred'
        : ''
      this.setState({...temp})
    }

    if (JSON.stringify(this.state.errors) === JSON.stringify(this.initialState.errors)) {
      this.props.saveEntity()
    }
  }

  render() {

    return (

      <form style={{padding: 16, paddingTop: 0,}}>

        <TextField
          id="title"
          value={this.props.current.title}
          errorText={this.state.errors.title}
          hintText="Insert the title"
          floatingLabelText="Title"
          fullWidth={true}
          onChange={this.updateValue}
        />

        <GenreSelectField
          value={this.props.current.genre}
          errorText={this.state.errors.genre}
          onChange={this.props.updateEntity}
        />

        <TextField
          id="lyrics"
          value={this.props.current.lyrics}
          errorText={this.state.errors.lyrics}
          hintText="Insert the lyrics"
          floatingLabelText="Lyrics"
          fullWidth={true}
          multiLine={true}
          rows={4}
          rowsMax={8}
          onChange={this.updateValue}
        />

        <DatePicker
          id="createdAt"
          value={this.props.current.createdAt}
          errorText={this.state.errors.createdAt}
          floatingLabelText="Created at"
          onChange={this.updateDateValue}
          autoOk={true}
          // DateTimeFormat={global.Intl.DateTimeFormat}
          // locale={config.locale}
          hintText="Created at"
          fullWidth={true}
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

        <AppFloatingActionButton route="/lyrics"/>

        <Dialog
          title="Confirmation"
          actions={[
            <FlatButton
              label="No"
              onTouchTap={this.handleClose}
            />,
            <FlatButton
              label="Yes"
              onTouchTap={() => this.props.removeEntity(this.props.current.id)}
            />,
          ]}
          modal={true}
          open={this.state.open}
        >
          Are you sure you want to remove it?
        </Dialog>

      </form>
    )
  }
}

export default SongEditorForm