import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import './smallHeader.css';

function Header() {
  return (
    <div>
        <Navbar className='nav-little' style={{padding: '0%', margin: '0%', 
        paddingLeft: '5%', paddingRight: '5%', color:'black'}}>
            <Nav className="mr-auto">
                <Nav.Link className='nav-link' href="#refresh" style={{color: 'black'}}><b>For You</b></Nav.Link>
                <Nav.Link className='nav-link' href="#explore" style={{color: 'black'}}><b>Local</b></Nav.Link>
                <Nav.Link className='nav-link' href="#follow" style={{color: 'black'}}><b>Video</b></Nav.Link>
            </Nav>
        </Navbar>
        <br/>
    </div>
  );
}

export default Header;



