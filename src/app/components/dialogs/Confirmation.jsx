import React from 'react'
import PropTypes from 'prop-types'
import{
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from 'material-ui'

const ConfirmationDialog = ({open, actionNo, actionYes, message, title}) => {

  return <Dialog classes={{}} open={open} onEscapeKeyUp={() => actionNo()}>
    <DialogTitle classes={{}}>{title}</DialogTitle>
    <DialogContent classes={{}}>
      <DialogContentText classes={{}}>
        {message}
      </DialogContentText>
    </DialogContent>
    <DialogActions classes={{}}>
      <Button classes={{}} onTouchTap={() => actionNo()}>NO</Button>
      <Button classes={{}}
              onTouchTap={() => actionYes()}>Yes</Button>
    </DialogActions>
  </Dialog>
}

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
  actionYes: () => console.warn('Action not implemented yet.'),
  actionNo: () => console.warn('Action not implemented yet.'),
}

export default ConfirmationDialog