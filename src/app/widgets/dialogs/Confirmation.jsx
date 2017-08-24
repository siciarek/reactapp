import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from 'material-ui'

import {truncate} from 'lodash'

const ConfirmationDialog = ({
                              open,
                              title,
                              message,
                              actionNo,
                              actionYes,
                            }) => <Dialog classes={{}} open={open} onEscapeKeyUp={actionNo}>
  <DialogTitle classes={{}}>{truncate(title, {length: 255})}</DialogTitle>
  <DialogContent classes={{}}>
    <DialogContentText classes={{}}>{truncate(message, {length: 10000})}</DialogContentText>
  </DialogContent>
  <DialogActions classes={{}}>
    <Button classes={{}} onTouchTap={actionNo}>NO</Button>
    <Button classes={{}} onTouchTap={actionYes}>Yes</Button>
  </DialogActions>
</Dialog>

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  actionYes: PropTypes.func.isRequired,
  actionNo: PropTypes.func.isRequired,
}

ConfirmationDialog.defaultProps = {
  open: false,
  title: 'Confirmation',
  message: 'Are you sure?',
  actionYes: () => {
  },
  actionNo: () => {
  },
}

export default ConfirmationDialog