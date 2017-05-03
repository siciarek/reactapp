import React from 'react'
import PropTypes from 'prop-types'
import{
  TextField,
  SelectField,
  MenuItem,
  RaisedButton,
  Slider,
  Checkbox,
  DatePicker,
  FlatButton,
  Dialog,
} from 'material-ui'
import AppFloatingActionButton from "../app/AppFloatingActionButton"

class ProfileForm extends React.Component {

  static propTypes = {
    current: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }

  initialState = {
    open: false,
    errors: {
      dateOfBirth: '',
      gender: '',
      firstName: '',
      lastName: '',
      email: '',
      info: '',
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
    const key = 'dateOfBirth'
    const val = value

    this.props.update(key, val)
  }

  updateSelectValue = (component, index, value) => {
    const key = 'gender'
    const val = value === null || value.toString().trim().length === 0 ? null : value

    this.props.update(key, val)
  }

  updateBooleanValue = (proxy, value) => {
    const key = 'public'
    const val = value

    this.props.update(key, val)
  }

  updateValue = (event) => {
    const key = event.target.id
    let val = event.target.value === null || event.target.value.toString().trim().length === 0 ? null : event.target.value

    this.props.update(key, val)
  }

  updateNumericalValue = (event, value, x) => {
    // console.log(event, value)

    const key = 'skillLevel'
    const val = value

    this.props.update(key, val)
  }

  remove = () => {
    this.handleOpen()
  }

  submit = () => {

    for (let key in this.initialState.errors) {
      let temp = {...this.state}
      temp.errors[key] = key !== 'info' && (this.props.current[key] === null || this.props.current[key] === '')
        ? 'This field is requred'
        : ''
      this.setState({...temp})
    }

    if (JSON.stringify(this.state.errors) === JSON.stringify(this.initialState.errors)) {
      this.props.save()
    }
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
            defaultChecked={this.props.current.public}
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
            value={this.props.current.skillLevel}
            onChange={this.updateNumericalValue}
          />

          <span>{`Skill level (${this.props.current.skillLevel}%)`}</span>

          <SelectField
            id="gender"
            ref="gender"
            value={this.props.current.gender}
            errorText={this.state.errors.gender}
            floatingLabelText="Gender"
            fullWidth={true}
            onChange={this.updateSelectValue}
          >
            <MenuItem value={'male'} primaryText="Male"/>
            <MenuItem value={'female'} primaryText="Female"/>
          </SelectField>

          <DatePicker
            id="dateOfBirth"
            value={this.props.current.dateOfBirth}
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

          <RaisedButton
            primary={true}
            label="Save"
            labelPosition="before"
            onTouchTap={this.submit}
          />
        </form>


        <AppFloatingActionButton route="/dashboard" icon="dashboard"/>

        <Dialog
          title="Confirmation"
          actions={[
            <FlatButton
              label="No"
              onTouchTap={this.handleClose}
            />,
            <FlatButton
              label="Yes"
              onTouchTap={() => this.props.remove(this.props.profile.id)}
            />,
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

export default ProfileForm