import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'
import {renderTextField, SubmitButton} from '../utils/formHelpers'
import {required, maxLength255} from '../utils/formValidators'

class SongEditorForm extends React.Component {

  render() {

    const {handleSubmit} = this.props

    return (

      <form onSubmit={handleSubmit}>

        <div>
          <Field name="title" label="Title" validate={required} component={renderTextField}/>
        </div>

        {/*<GenreSelectField*/}
        {/*value={this.props.current.genre}*/}
        {/*errorText={this.state.errors.genre}*/}
        {/*onChange={this.props.updateEntity}*/}
        {/*/>*/}

        <div>
          <Field name="lyrics" label="Lyrics" validate={required} component={renderTextField}
                 rows={10} rowsMax={16} multiline={true}/>
        </div>

        <div>
          <Field name="description" label="Description" validate={maxLength255} component={renderTextField}/>
        </div>

        <div>
          <Field name="info" label="Info" validate={maxLength255} component={renderTextField}
                 rows={4} rowsMax={8} multiline={true}/>
        </div>

        <br/>

        <div>
          <SubmitButton/>
        </div>

        {/*<DatePicker*/}
        {/*id="firstPublishedAt"*/}
        {/*value={new Date(this.props.current.firstPublishedAt)}*/}
        {/*errorText={this.state.errors.firstPublishedAt}*/}
        {/*floatingLabelText="First published at"*/}
        {/*onChange={this.updateDateValue}*/}
        {/*autoOk={true}*/}
        {/*fullWidth={true}*/}
        {/*/>*/}

        {/*<br/>*/}
        {/*<br/>*/}

        {/*<RaisedButton*/}
        {/*primary={true}*/}
        {/*label="Save"*/}
        {/*labelPosition="before"*/}
        {/*icon={<FontIcon className="material-icons">add_circle_outline</FontIcon>}*/}
        {/*onTouchTap={this.submit}*/}
        {/*/>*/}

        {/*<RaisedButton*/}
        {/*secondary={true}*/}
        {/*style={{marginLeft: 12, display: (this.props.current.id ? 'inline-block' : 'none')}}*/}
        {/*label="Remove"*/}
        {/*labelPosition="before"*/}
        {/*icon={<FontIcon className="material-icons">remove_circle_outline</FontIcon>}*/}
        {/*onTouchTap={this.remove}*/}
        {/*/>*/}

        {/*<AppFloatingActionButton route="/lyrics"/>*/}

        {/*<Dialog*/}
        {/*title="Confirmation"*/}
        {/*actions={[*/}
        {/*<FlatButton*/}
        {/*label="No"*/}
        {/*onTouchTap={this.handleClose}*/}
        {/*/>,*/}
        {/*<FlatButton*/}
        {/*label="Yes"*/}
        {/*onTouchTap={() => this.props.removeEntity(this.props.current.id)}*/}
        {/*/>,*/}
        {/*]}*/}
        {/*modal={true}*/}
        {/*open={this.state.open}*/}
        {/*>*/}
        {/*Are you sure you want to remove it?*/}
        {/*</Dialog>*/}

      </form>
    )
  }
}

export default reduxForm({form: 'songForm'})(SongEditorForm)