import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import{
  TextField,
  Button,
  Slider,
  LabelCheckbox,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from 'material-ui'

// import DatePicker from 'material-ui/DatePicker'
import {AppGenderSelectField} from '../../app/components/index'
import {updateUser, saveUser} from '../UserActions'

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


    return <div>

      <form>

        <br/>

        <LabelCheckbox
          label="Profile visible to the public"
          checked={this.props.current.profileVisibleToThePublic}
          onClick={() => this.updateEntity('profileVisibleToThePublic', !this.props.current.profileVisibleToThePublic)}
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

        {/*<DatePicker marginForm*/}
        {/*label="Date of birth"*/}
        {/*id="dateOfBirth"*/}
        {/*value={new Date(this.props.current.dateOfBirth)}*/}
        {/*onChange={this.updateDateValue}*/}
        {/*autoOk={true}*/}
        {/*fullWidth={true}*/}
        {/*/>*/}

        <TextField marginForm
                   label="First name"
                   id="firstName"
                   value={this.props.current.firstName}
                   fullWidth={true}
                   onChange={this.updateValue}
        />

        <TextField marginForm
                   label="Last name"
                   id="lastName"
                   value={this.props.current.lastName}
                   fullWidth={true}
                   onChange={this.updateValue}
        />

        <TextField marginForm
                   label="Email"
                   id="email"
                   value={this.props.current.email}
                   fullWidth={true}
                   onChange={this.updateValue}
        />

        <TextField marginForm
                   label="Description"
                   id="description"
                   value={this.props.current.description ? this.props.current.description : ''}
                   fullWidth={true}
                   onChange={this.updateValue}
        />

        <TextField marginForm
                   label="Info"
                   id="info"
                   value={this.props.current.info ? this.props.current.info : ''}
                   fullWidth={true}
                   rowsMax={8}
                   onChange={this.updateValue}
        />

        <br/>
        <br/>

        <Button classes={{}} raised color="accent" onTouchTap={() => this.handleOpen()}>Remove</Button>
        <Button classes={{}} raised onTouchTap={this.submit}>Save</Button>
      </form>


      <Dialog classes={{}} open={this.state.open} onEscapeKeyUp={() => this.handleClose()}>
        <DialogTitle classes={{}}>Confirmation</DialogTitle>
        <DialogContent classes={{}}>
          <DialogContentText classes={{}}>
            Are you sure you want to remove it?
          </DialogContentText>
        </DialogContent>
        <DialogActions classes={{}}>
          <Button classes={{}} onTouchTap={() => this.handleClose()}>NO</Button>
          <Button classes={{}}
                  onTouchTap={() => alert(`Remove: ${this.props.current.id}, Not implemented yet.`)}>Yes</Button>
        </DialogActions>
      </Dialog>

    </div>
  }
}

ProfileForm.propTypes = {
  current: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default ProfileForm