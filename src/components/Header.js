import React, { PureComponent } from 'react'

import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faMedium from '@fortawesome/fontawesome-free-brands/faMedium'

import logo from 'assets/img/logoSmall.svg'

class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const style = {
      color: 'white'
    }

    return (
      <Container>
        <Navbar light expand="md" fixed="true" color="faded">
          <NavbarBrand href="/">
            <img src={logo} width="100%" height="100%" alt="Blue Blood Indices" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar style={style}>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://medium.com/bluebloodltd">
                  <FontAwesomeIcon style={style} icon={faMedium} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/BlueBloodLtd">
                  <FontAwesomeIcon style={style} icon={faGithub} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.facebook.com/Blue-Blood-531569267240540/">
                  <FontAwesomeIcon style={style} icon={faFacebook} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://twitter.com/BlueBloodLtd">
                  <FontAwesomeIcon style={style} icon={faTwitter} />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
      )
  }
}

export default Header
