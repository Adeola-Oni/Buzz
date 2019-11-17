import React from 'react';
import { Navbar, NavDropdown, Nav, Form, Button, FormControl } from 'react-bootstrap';
import './header.css';

function Header() {
  return (
    <div>
        <Navbar className='header' style={{padding: '0%', margin: '0%', paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#0F52BA', color: 'white'}}>
        {/* expand="lg" */}
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link style={{color: 'white'}} href="/"><b>Refresh</b></Nav.Link>
                    <Nav.Link style={{color: 'white'}} href="/explore"><b>Explore</b></Nav.Link>
                    <Nav.Link style={{color: 'white'}} href="#follow"><b>Follow</b></Nav.Link>
                    <Nav.Link style={{color: 'white'}} href="#me"><b>Me</b></Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{padding: '0%', margin: '0%', fontSize:'90%', textAlign: 'center'}} />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default Header;
