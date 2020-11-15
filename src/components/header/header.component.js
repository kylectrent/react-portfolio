import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.styles.scss';

function Header(props) {
    return(
      <Navbar bg="light" style={{borderBottom:"1px dotted blue"}}>
        <Navbar.Brand><Link to="/react-portfolio" className="item">Kyle's Portfolio Site</Link></Navbar.Brand>
        <Container className="navbar-container">  
              <Nav.Link><Link to="/about" className="item">About</Link></Nav.Link>
              <Nav.Link><Link to="/projects" className="item">Projects</Link></Nav.Link>
        </Container>
      </Navbar>
    );
}

export default Header;