import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PartyList from "./PartyList";
import EdgeShadows from "../lib/EdgeShadows";
import MoveList from "./MoveList";
import pokeball from "../assets/img/pokeball.png"

function PartyPage({pokemonList, setPokemonList, party, setParty, selectedPokemon, setSelectedPokemon}) {

    return (
        <>
            <Row className="mx-0" style={{
                width: "100%",
                height: "88vh",
                position: "relative",
                background: "#e0e8e8",
            }}>
                {/* Stats Summary */}
                <Col md={3}
                     className="d-inline-block pb-3"
                     style={{
                         borderBottomRightRadius: "2%",
                         borderBottom: "5px solid #463d41",
                         borderRight: "5px solid #463d41",
                         boxShadow: "inset -3px -3px 0px 3px rgba(0, 0, 0, 0.1)",
                         backgroundColor: "#fff9f2",
                         height: "100%",
                         zIndex: 2,
                     }}>

                </Col>
                {/*  Pokemon Image & Skill */}
                <Col md={3} className="px-0">
                    <Row style={{
                        backgroundColor: "transparent",
                        height: "3%",
                        width: "100%",
                    }}>

                    </Row>
                    {/* Pokemon Label */}
                    <Row className="d-flex justify-content-start mx-auto"
                         style={{
                             background: "#ef6155",
                             width: "100%",
                             borderTop: "5px solid #637787",
                             borderBottom: "5px solid #637787",
                         }}>
                        <p className="pt-2 pl-4 m-0" style={{
                            fontFamily: "Pokemon",
                            fontSize: "5vh",
                            color: "white",
                            textShadow: "2px 2px #665f5b",
                        }}>
                            POKEMON
                        </p>
                    </Row>
                    {/* Name & Level*/}
                    <Row className="mx-auto mt-2">
                        <Col md={1}>
                        </Col>
                        <Col className="px-0"
                            style={{
                            right: 0,
                            width: "100%",
                            borderTop: "7px solid #637787",
                            borderBottom: "7px solid #637787",
                            borderLeft: "7px solid #637787",
                            borderTopLeftRadius: "10px",
                                borderBottomLeftRadius: "10px",
                            fontFamily: "Pokemon",
                            fontSize: "3vh",
                            color: "white",
                            textShadow: "2px 2px #665f5b",
                        }}>
                            <Row className="mx-0 pl-2 align-content-center"
                                 style={{
                                     backgroundColor: "#909eaa",
                                     width: "100%",
                                 }}>
                                <img src={pokeball}
                                     alt="pokeball"
                                     className="my-1 mr-1"
                                     style={{
                                         width: "40px"
                                     }}
                                />
                                {selectedPokemon.length > 0
                                    ? <span className="pt-3 my-0">{selectedPokemon[0].name.toUpperCase()}</span>
                                    : null}

                            </Row>
                            <Row className="ml-2 mt-1"
                                 style={{
                                     width: "100%",
                                     color: "#3c4041",
                                 }}>Lv.100</Row>

                        </Col>
                    </Row>
                    {/* Artwork */}
                    <Row>
                        {selectedPokemon.length > 0
                            ? <img src={selectedPokemon[0].sprites.other["official-artwork"]["front_default"]}
                                   alt={selectedPokemon[0].name}
                                   className="mx-auto"
                                   style={{width: "80%"}}
                            />
                            : null}

                    </Row>
                    {/* Move Desc */}
                    <Row className="mx-auto mt-2"
                    style={{height: "auto"}}>
                        <Col md={1}>
                        </Col>
                        <Col className="px-0"
                             style={{
                                 right: 0,
                                 width: "100%",
                                 border: "7px solid #637787",
                                 borderBottom: "none",
                                 borderTopLeftRadius: "10px",
                                 borderTopRightRadius: "10px",
                                 fontFamily: "Pokemon",
                                 fontSize: "3vh",
                                 color: "white",
                                 textShadow: "2px 2px #665f5b",
                             }}>
                            <Row className="mx-0 pl-2 align-content-center"
                                 style={{
                                     backgroundColor: "#909eaa",
                                     height: "50%",
                                     width: "100%",
                                 }}>
                                {/*{selectedPokemon.length > 0*/}
                                {/*    ? <span className="pt-3 my-0">{selectedPokemon[0].name.toUpperCase()}</span>*/}
                                {/*    : null}*/}
                                Skill Name

                            </Row>
                            <Row className="mx-0"
                                 style={{
                                     height: "50%",
                                     width: "100%",
                                     color: "#3c4041",
                                     background: "#e0e8e8",
                                 }}>Skill Desc</Row>

                        </Col>
                    </Row>

                </Col>
                {/* Move List */}
                <MoveList selectedPokemon={selectedPokemon} party={party}/>
                {/* Party List */}
                <Col md={3} className="px-0">
                    <PartyList party={party}
                               setParty={setParty}
                               selectedPokemon={selectedPokemon}
                               setSelectedPokemon={setSelectedPokemon}/>
                </Col>
            </Row>
            <EdgeShadows/>
        </>
    );
}

// <span
//     className={`d-inline-block ${getType(pokemon.types)}`}
//     style={{
//         borderWidth: "5px",
//         borderStyle: "solid",
//         borderRadius: "50%",
//         width: "100%"
//     }}>
//     </span>

export default PartyPage;
