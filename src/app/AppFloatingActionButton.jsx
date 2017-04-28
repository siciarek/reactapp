import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';


export default class AppFloatingActionButton extends Component {

  static propTypes = {
    icon: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  }

  static defaultProps = {
    icon: 'keyboard_arrow_left',
    route: '/',
  }

  render() {

    return (
      <FloatingActionButton className="button-fixed-bottom-right" containerElement={<Link to={this.props.route}/>}>
        <FontIcon className="material-icons">{this.props.icon}</FontIcon>
      </FloatingActionButton>
    )
  }
}
