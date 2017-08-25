import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import IconKeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft'

const AppFloatingActionButton = ({icon, color, action}) => {

    return <Button fab
                   style={{
                     position: 'fixed',
                     top: 'auto',
                     right: 20,
                     bottom: 20,
                     left: 'auto',
                     margin: 0,
                     zIndex: 2147483647,
                   }}
                   color={color}
                   onTouchTap={action}
    >
      {icon}
    </Button>
}

AppFloatingActionButton.propTypes = {
  icon: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
}

AppFloatingActionButton.defaultProps = {
  icon: <IconKeyboardArrowLeft/>,
  color: 'primary',
  action: () => {},
}

export default AppFloatingActionButton