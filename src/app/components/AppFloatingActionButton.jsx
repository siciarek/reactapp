import React from 'react'
import PropTypes from 'prop-types'
import {browserHistory as routerHistory} from 'react-router'
import Button from 'material-ui/Button'
import IconKeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft'

const AppFloatingActionButton = ({icon, color, route}) =>
  <Button fab
          style={{
            margin: 0,
            zIndex: 2147483647,
            position: 'fixed',
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
          }}
          color={color}
          onTouchTap={() => routerHistory.push(route)}
  >
    {icon}
  </Button>

// class AppFloatingActionButton extends React.Component {
//
//   render() {
//
//     const {icon, color, route} = this.props
//
//     return <Button fab
//                    style={{
//                      margin: 0,
//                      zIndex: 2147483647,
//                      position: 'fixed',
//                      top: 'auto',
//                      right: 20,
//                      bottom: 20,
//                      left: 'auto',
//                    }}
//                    color={color}
//                    onTouchTap={() => routerHistory.push(route)}
//     >
//       {icon}
//     </Button>
//   }
// }

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