import React from "react";
import {Navbar} from "reactstrap";

function Header() {
  return (
    <div>
       <Navbar
          className="navbar-horizontal navbar-dark bg-primary"
          expand="lg"
        >
<h2>Header</h2>
        </Navbar>
    </div>
  )
}

export default Header
