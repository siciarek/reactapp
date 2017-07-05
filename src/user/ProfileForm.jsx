import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import{
  TextField,
  Button,
  Slider,
  Checkbox,
  DatePicker,
  FlatButton,
  Dialog,
} from 'material-ui'
import {AppGenderSelectField} from '../app/components'
import {updateUser, saveUser} from './UserActions'

class ProfileForm extends React.Component {

  initialState = {
    open: false,
    errors: {
      dateOfBirth: '',
      gender: '',
      firstName: '',
      lastName: '',
      email: '',
      info: '',
      description: '',
    }
  }

  constructor(props) {
    super(props)
    this.state = {...this.initialState, errors: {...this.initialState.errors}}
  }

  updateEntity = (key, value) => {
    this.props.dispatch(updateUser({...this.props.current, [key]: value}))
  }

  saveEntity = () => {
    this.props.dispatch(saveUser(this.props.current))
  }


  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }


  updateDateValue = (event, value) => {
    const dateOfBirth = moment(value, 'YYYY-MM-DD').format('YYYY-MM-DD')
    this.updateEntity('dateOfBirth', dateOfBirth)
  }

  updateSelectValue = (component, index, value) => {
    const key = 'gender'
    const val = value === null || value.toString().trim().length === 0 ? null : value

    this.updateEntity(key, val)
  }

  updateBooleanValue = (proxy, value) => {
    this.updateEntity('profileVisibleToThePublic', value)
  }

  updateValue = (event) => {
    const key = event.target.id
    const val = event.target.value === null || event.target.value.toString().trim().length === 0 ? null : event.target.value

    this.updateEntity(key, val)
  }

  updateNumericalValue = (event, value) => {
    this.updateEntity('level', value)
  }

  remove = () => {
    this.handleOpen()
  }

  submit = () => {
    this.saveEntity()
  }

  render() {

    return (

      <div>

        <form>

          <br/>

          <Checkbox
            label="Profile visible to the public"
            labelPosition="right"
            onCheck={this.updateBooleanValue}
            defaultChecked={this.props.current.profileVisibleToThePublic}
          />

          <br/>

          <Slider
            ref="level"
            id="level"
            key="level"
            style={{marginTop: -10, marginBottom: -40}}
            min={0}
            max={100}
            step={1}
            value={this.props.current.level}
            onChange={this.updateNumericalValue}
          />

          <span>{`Level (${this.props.current.level}%)`}</span>

          <AppGenderSelectField
            value={this.props.current.gender}
            errorText={this.state.errors.gender}
            fullWidth={true}
            onChange={this.updateSelectValue}
          />

          <DatePicker
            id="dateOfBirth"
            value={new Date(this.props.current.dateOfBirth)}
            errorText={this.state.errors.dateOfBirth}
            floatingLabelText="Date of birth"
            onChange={this.updateDateValue}
            autoOk={true}
            fullWidth={true}
          />

          <TextField
            id="firstName"
            value={this.props.current.firstName}
            errorText={this.state.errors.firstName}
            floatingLabelText="First name"
            fullWidth={true}
            onChange={this.updateValue}
          />

          <TextField
            id="lastName"
            value={this.props.current.lastName}
            errorText={this.state.errors.lastName}
            floatingLabelText="Last name"
            fullWidth={true}
            onChange={this.updateValue}
          />

          <TextField
            id="email"
            value={this.props.current.email}
            errorText={this.state.errors.email}
            floatingLabelText="Email"
            fullWidth={true}
            onChange={this.updateValue}
          />

          <TextField
            id="description"
            value={this.props.current.description ? this.props.current.description : ''}
            errorText={this.state.errors.description}
            floatingLabelText="Description"
            fullWidth={true}
            onChange={this.updateValue}
          />

          <TextField
            id="info"
            value={this.props.current.info ? this.props.current.info : ''}
            errorText={this.state.errors.info}
            floatingLabelText="Info"
            fullWidth={true}
            multiLine={true}
            rowsMax={8}
            onChange={this.updateValue}
          />

          <br/>
          <br/>

          <Button classes={{}} raised onTouchTap={this.submit}>Save</Button>
        </form>


        <Dialog classes={{}}
          title="Confirmation"
          actions={[
            <Button classes={{}} onTouchTap={() => this.handleClose()}>No</Button>,
            <Button classes={{}} onTouchTap={() => this.props.remove(this.props.profile.id)}>Yes</Button>,
          ]}
          modal={true}
          open={this.state.open}
        >
          Are you sure you want to remove it?
        </Dialog>

      </div>
    )
  }
}

ProfileForm.propTypes = {
  current: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default ProfileForm