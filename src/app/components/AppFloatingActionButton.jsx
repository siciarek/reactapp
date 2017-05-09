import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import FontIcon from 'material-ui/FontIcon'


function AppFloatingActionButton(props) {

    return (
      <FloatingActionButton className="button-fixed-bottom-right" containerElement={<Link to={props.route}/>}>
        <FontIcon className="material-icons">{props.icon}</FontIcon>
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

export default AppFloatingActionButton