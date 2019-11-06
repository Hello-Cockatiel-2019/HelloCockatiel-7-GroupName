import React from 'react';
import './App.css';
import Home from './component/Home';
import Species from './component/Species';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import About from './component/About';
import Page8 from './component/Page8';
import Page9 from './component/Page9';
import Author from './component/Page10';

const Menu = styled.a`
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
color: black;
`
const Logo = '/img/Logo.png';

function App() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light NavbarBackground" >
        <Menu ><img src={Logo} alt="This is Logo" className="Logo" /></Menu>
        <div className="Navbar">
          <Menu className="navbar-brand" href="#">Home</Menu>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Menu className="navbar-brand" href="#">About</Menu>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Menu className="navbar-brand" href="#">xxxxxx</Menu>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Menu className="navbar-brand" href="#">xxxxxx</Menu>
        </div>
      </nav>
      <Home></Home>
      <About></About>
      <Species></Species>
      <Page8></Page8>
      <Page9></Page9>
      <Author></Author>
    </div>
  );
}

export default App;
