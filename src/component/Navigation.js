import React, {useEffect} from 'react';
import axios from "axios";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Image, Col} from "react-bootstrap";
import {NavLink} from "react-router-dom"
import pokemonLogo from "../assets/img/pokemon_logo.png"

function Navigation({generations, setGenerations}) {

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/generation/")
            .then(generations => {
                setGenerations(generations.data.results)
            })
    })

    return (
        <Navbar bg="light" variant="light" expand="lg" className="py-0" style={{
            border: "5px solid #ebebeb",
            borderStyle: "outset",
            fontFamily: "Pokemon"
        }}>
            <NavLink to="/">
                <Navbar.Brand>
                <Col className="d-flex flex-column align-items-center">
                <Image src={pokemonLogo} alt="pokemon" fluid style={{width: "100px"}} />
                <div className="text-secondary" style={{fontSize: "16px"}}>Team Planner</div>
                </Col>
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/party" className="nav-link"><Button>Party</Button></NavLink>
                    <NavDropdown title="Generations" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Select All</NavDropdown.Item>
                        {generations ? generations.map(generation => (
                            <NavDropdown.Item href="#">{generation.name}</NavDropdown.Item>
                        )): null}
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
