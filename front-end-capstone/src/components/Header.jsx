import React from "react";
import {Navbar, Container} from "reactstrap";

function Header() {
  return (
    <div>
       <Navbar
          className="navbar-horizontal navbar-dark bg-primary"
          expand="lg"
        >
        <Container>
<h2>Header</h2>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header
