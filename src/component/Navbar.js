import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
const Menu = styled.a`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
margin-right:20px;
color: #000000;

`


function Navbar() {
  const Navbar = {
    margin:'20px 0px 0px 900px'
  }
    return (
      <div >
        <nav className="navbar navbar-expand-sm  navbar-light">
  
  <Menu className="navbar-brand" href="#" >Logo</Menu>

  
  <ul className="navbar-nav" style={Navbar}>
    <li className="nav-item">
      <Menu className="nav-link" href="#">Home</Menu>
    </li>
    <li className="nav-item">
      <Menu className="nav-link" href="#">About</Menu>
    </li>
    <li className="nav-item">
      <Menu className="nav-link" href="#">xxxxxx</Menu>
    </li>
    <li className="nav-item">
      <Menu className="nav-link" href="#">xxxxxx</Menu>
    </li>
  </ul>
</nav>
      </div>
    );
  }
  
  export default Navbar;