import React from 'react'
import { PropTypes } from 'prop-types'

const Dummy = ({text, onClick}) => {

  return (
    <p onClick={onClick}>{text}</p>
  )
}

Dummy.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

Dummy.defaultProps = {
  text: 'Dummy - domyślna wartość'
}

export default Dummy