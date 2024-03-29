import React from "react";
// import {Navbar, Container, NavbarBrand, NavbarText, Row, Col} from "reactstrap";
import {
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    NavbarText,
    Nav,
    Container,
    Row,
    Col
  } from "reactstrap";

function Header() {
  return (
    <div>
        <Navbar
          className="navbar-horizontal navbar-dark bg-purple"
          color="purple"
          expand="lg"
        >
          <Container>
            {/* <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}> */}
            <NavLink href="/"><h2>iSummarize</h2></NavLink>
            {/* </NavbarBrand> */}
            <button
              className="navbar-toggler"
              data-target="#navbar-primary"
              data-toggle="collapse"
              id="navbar-primary"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-primary">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" >
                    <p>Close</p>
                  </Col>
                  <Col className="collapse-close" >
                    <button
                      className="navbar-toggler"
                      data-target="#navbar-primary"
                      data-toggle="collapse"
                      id="navbar-primary"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <NavLink href="/about" >
                    About Us
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <NavLink
                    data-toggle="dropdown"
                    href="/login"
                    id="navbar-primary_dropdown_1"
                    role="button"
                  >
                    Login/Signup
                  </NavLink>
                  <DropdownMenu
                    right
                  >
                    <DropdownItem
                      href="#"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      href="#"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header
