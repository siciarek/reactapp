import React from 'react'
import PropTypes from 'prop-types'
import {withRouter, Link} from 'react-router'
import {FloatingActionButton} from 'material-ui'
import FontIcon from 'material-ui/FontIcon'

import './AppFloatingActionButton.css'

function AppFloatingActionButton(props) {

    const {icon, route} = props

    return (
      <FloatingActionButton
        className="button-fixed-bottom-right"
        containerElement={<Link to={route}/>}>
        <FontIcon className="material-icons">{icon}</FontIcon>
      </FloatingActionButton>
    )
}

AppFloatingActionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
}

AppFloatingActionButton.defaultProps = {
  icon: 'keyboard_arrow_left',
  route: '/',
}

export default withRouter(AppFloatingActionButton)