import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'material-ui'

const SubmitButton = ({caption, color, enabled}) => <Button
  raised
  disabled={enabled === false}
  color={color}
  type="submit"
>{caption}</Button>

SubmitButton.propTypes = {
  caption: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
}

SubmitButton.defaultProps = {
  caption: 'Submit',
  color: 'primary',
  enabled: true,
}

export default SubmitButton