import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PartyList from "./PartyList";
import EdgeShadows from "../lib/EdgeShadows";
import MoveList from "./MoveList";

function PartyPage({pokemonList, setPokemonList, party, setParty, selectedPokemon,setSelectedPokemon}) {



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
                {/* Move List */}
                <MoveList selectedPokemon={selectedPokemon}/>
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
