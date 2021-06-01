import React from 'react';
import {Container, Col, Row} from "react-bootstrap";
import {removeFromParty, selectPokemon} from "../lib/helpers";

function PartyList({party, setParty, selectedPokemon, setSelectedPokemon}) {

    // function getType(pokemonType) {
    //     let types = ""
    //     pokemonType.map(type => (
    //         types += `${type.type.name}${type.slot} `
    //     ))
    //     return `${types}`
    // }

    return (
        <>
            <Row style={{
                backgroundColor: "transparent",
                height: "3%",
                width: "100%",
            }}>

            </Row>
            <Row className="d-flex justify-content-start mx-auto"
                 style={{
                background: "#ef6155",
                width: "100%",
                borderTop: "7px solid #637787",
                borderBottom: "7px solid #637787",
            }}>
                <p className="pt-2 pl-4 m-0" style={{
                    fontFamily: "Pokemon",
                    fontSize: "5vh",
                    color: "white",
                    textShadow: "2px 2px #665f5b",
                }}>
                    PARTY
                </p>
            </Row>
            <Row className="mx-0 my-3"
                 style={{
                     width: '100%',
                 }}>
                {party.length > 0 ? party.map((pokemon, i) => (
                    <Col key={i + 1}
                         md={6}
                         className="mb-3 text-center"
                         onClick={() => selectPokemon(pokemon, i, selectedPokemon, setSelectedPokemon)}>

                        <Container style={{
                            width: "100%",
                            border: "5px solid #3b433d",
                            borderRadius: "10%",
                            boxShadow: "inset 0px -10px 0px 0px rgba(0, 0, 0, 0.2)," +
                                " inset 0px -10px 0px 3px rgba(0, 0, 0, 0.2)",
                            backgroundColor: "#e1e0df",
                        }}>
                            <Container
                                style={{

                                }}
                                onClick={() => removeFromParty(i, party, setParty, selectedPokemon, setSelectedPokemon)}>-</Container>
                            <img style={{
                                width: "70%",
                            }}
                                 src={pokemon.sprites["front_default"]}
                                 alt={pokemon.name}/>
                        </Container>
                    </Col>
                )) : null}
            </Row>
        </>
    );
}

export default PartyList;

