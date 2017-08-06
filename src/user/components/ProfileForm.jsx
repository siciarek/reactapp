import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import{
  TextField,
  Button,
  Slider,
  LabelCheckbox,
} from 'material-ui'

// import DatePicker from 'material-ui/DatePicker'
import {AppGenderSelectField} from '../../app/components/index'
import {updateUser, saveUser} from '../UserActions'

import ConfirmationDialog from '../../app/components/dialogs/Confirmation'

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

  updateDateValue = (event, value) => {
    const dateOfBirth = moment(value, 'YYYY-MM-DD').format('YYYY-MM-DD')
    this.updateEntity('dateOfBirth', dateOfBirth)
  }

  updateSelectValue = (component, index, value) => {
    const key = 'gender'
    const val = value === null || value.toString().trim().length === 0 ? null : value

    this.updateEntity(key, val)
  }

  updateValue = (event) => {
    const key = event.target.id
    const val = event.target.value === null || event.target.value.toString().trim().length === 0 ? null : event.target.value

    this.updateEntity(key, val)
  }

  updateNumericalValue = (event, value) => {
    this.updateEntity('level', value)
  }

  render() {

    const {id, profileVisibleToThePublic, firstName, lastName, email, description, info} = this.props.current

    return <div>

      <ConfirmationDialog open={this.state.open}
                          message="Are you sure you want to remove it?"
                          actionYes={() => {
                            alert(`Remove: ${id}, Not implemented yet.`)
                            this.setState({open: false})
                          }}
                          actionNo={() => this.setState({open: false})}/>

      <form>
        <br/>

        <LabelCheckbox
          label="Profile visible to the public"
          checked={profileVisibleToThePublic}
          onClick={() => this.updateEntity('profileVisibleToThePublic', !profileVisibleToThePublic)}
        />

        <br/>

        {/*<Slider*/}
        {/*ref="level"*/}
        {/*id="level"*/}
        {/*key="level"*/}
        {/*style={{marginTop: -10, marginBottom: -40}}*/}
        {/*min={0}*/}
        {/*max={100}*/}
        {/*step={1}*/}
        {/*value={this.props.current.level}*/}
        {/*onChange={this.updateNumericalValue}*/}
        {/*/>*/}
        {/*<span>{`Level (${this.props.current.level}%)`}</span>*/}

        {/*<AppGenderSelectField*/}
        {/*value={this.props.current.gender}*/}
        {/*errorText={this.state.errors.gender}*/}
        {/*fullWidth={true}*/}
        {/*onChange={this.updateSelectValue}*/}
        {/*/>*/}

        {/*<DatePicker*/}
        {/*label="Date of birth"*/}
        {/*id="dateOfBirth"*/}
        {/*value={new Date(this.props.current.dateOfBirth)}*/}
        {/*onChange={this.updateDateValue}*/}
        {/*autoOk={true}*/}
        {/*fullWidth={true}*/}
        {/*/>*/}

        <TextField label="First name"
                   id="firstName"
                   value={firstName}
                   fullWidth={true}
                   onChange={this.updateValue}
        />

        <TextField label="Last name"
                   id="lastName"
                   value={lastName}
                   fullWidth={true}
                   onChange={this.updateValue}
        />

        <TextField label="Email"
                   id="email"
                   value={email}
                   fullWidth={true}
                   onChange={this.updateValue}
        />

        <TextField label="Description"
                   id="description"
                   value={description ? description : ''}
                   fullWidth={true}
                   onChange={this.updateValue}
        />

        <TextField label="Info"
                   id="info"
                   value={info ? info : ''}
                   multiline={true}
                   fullWidth={true}
                   rowsMax={8}
                   onChange={this.updateValue}
        />

        <br/>
        <br/>

        <Button classes={{}} raised onTouchTap={() => this.setState({open: true})} color="accent">Remove</Button>
        <Button classes={{}} raised onTouchTap={() => this.saveEntity()}>Save</Button>
      </form>
    </div>
  }
}

ProfileForm.propTypes = {
  current: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default ProfileForm
