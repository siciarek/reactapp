import React from 'react'
import {Link, withRouter} from 'react-router'
import config from '../config'
import {Nav, Navbar, NavItem} from 'react-bootstrap'

class Menu extends React.Component {

  render() {

    const router = this.props.router
    const path = router.getCurrentLocation().pathname

    return (
      <Navbar inverse staticTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <i className="fa-bullseye fa">
              </i>
              &nbsp;
              {config.appName}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} className={path === '/' ? 'active' : null} onClick={ () => {router.push('/')} }>Home</NavItem>
            <NavItem eventKey={2} className={path === '/users' ? 'active' : null} onClick={ () => {router.push('/users')} }>Users</NavItem>
            <NavItem eventKey={3} className={path === '/tweets' ? 'active' : null} onClick={ () => {router.push('/tweets')} }>Tweets</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );

  }
}

const MainMenu = withRouter(Menu);

export default MainMenu
