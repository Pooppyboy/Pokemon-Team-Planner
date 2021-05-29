import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Image, Col} from "react-bootstrap";
import pokemonLogo from "../img/pokemon_logo.png"

function Navigation(props) {
    return (
        <Navbar bg="light" variant="light" expand="lg" className="py-0" style={{border: "5px solid #ebebeb", borderStyle: "outset"}}>
            <Navbar.Brand href="#home" style={{fontFamily: "Odibee Sans", fontSize: "2rem"}}>
                <Col >
                <Image src={pokemonLogo} alt="pokemon" fluid style={{width: "100px"}} />
                <div className="text-secondary" style={{fontSize: "24px"}}>Team Planner</div>
                </Col>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
