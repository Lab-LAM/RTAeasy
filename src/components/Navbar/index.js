import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = ()=>{
    return(
            <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                <Navbar.Brand href="/" style={{marginLeft:30}}>RTAeasy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Início</Nav.Link>
                    <Nav.Link href="/tutorial">Tutorial</Nav.Link>
                    <Nav.Link href="/download">Download</Nav.Link>
                    <Nav.Link href="/contatos">Contatos</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="/" style={{marginRight:30}}>UFT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Navigation;