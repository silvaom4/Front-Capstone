import React, { useState } from "react";
import { NavLink as RRNavLink, useLocation } from "react-router-dom";
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
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  // Define routes and corresponding links
  const routes = [
    { path: '/forum', name: 'Forum' },
    { path: '/about', name: 'About Us' },
    { path: '/contact', name: 'Contact Us' }
  ];

  // Update active link when location changes
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const loginStatus = localStorage.getItem('ID') === null ? 'Login/Register' : localStorage.getItem('Username')
  const isAdmin = localStorage.Admin == '1' ? '• Admin' : '';
  const loginStatusRoute = localStorage.getItem('ID') === null ? '/login' : '/profile'
  
  return (
    <div>
        <Navbar
          className="navbar-horizontal navbar-dark bg-purple"
          color="purple"
          expand="lg"
        >
          <Container>
            <NavbarBrand href="/"><h2>iSummarize</h2></NavbarBrand>
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
                  <Col className="collapse-brand" xs="6">
                    <hi>Close</hi>
                  </Col>
                  <Col className="collapse-close" xs="6">
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
                {routes.map((route, index) => (
                  <NavItem key={index}>
                    <NavLink
                      tag={RRNavLink}
                      to={route.path}
                      exact
                      activeClassName="active"
                      onClick={() => setActiveLink(route.path)}
                    >
                      {route.name}
                    </NavLink>
                  </NavItem>
                ))}
                <UncontrolledDropdown nav>
                  <NavLink
                    data-toggle="dropdown"
                    href={loginStatusRoute}
                    id="navbar-primary_dropdown_1"
                    role="button"
                  >
                    {loginStatus} {isAdmin}
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

export default Header;
