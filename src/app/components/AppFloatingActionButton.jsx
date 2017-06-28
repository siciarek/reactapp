import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import {FloatingActionButton, FontIcon} from 'material-ui'

import './AppFloatingActionButton.css'

const AppFloatingActionButton = ({icon, route}) =>
  <FloatingActionButton
    className="button-fixed-bottom-right"
    containerElement={<Link to={route}/>}>
    <FontIcon className="material-icons">{icon}</FontIcon>
  </FloatingActionButton>

AppFloatingActionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
}

AppFloatingActionButton.defaultProps = {
  icon: 'keyboard_arrow_left',
  route: '/',
}

export default AppFloatingActionButton