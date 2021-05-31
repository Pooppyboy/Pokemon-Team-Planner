import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import boxTitleBackground from "../assets/img/box_title_background.png";
import PokemonList from "./PokemonList";
import PartyList from "./PartyList";

function PartyPage({pokemonList, setPokemonList, party, setParty}) {
    return (
        <>
            <Row className="mx-0" style={{
                width: "100%",
                position: "relative",
                background: "#e0e8e8",
            }}>
                {/* Summary */}
                <Col md={8}
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
                {/* Party List */}
                <Col md={4} className="px-0">
                    <PartyList party={party} setParty={setParty}/>
                </Col>
            </Row>
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
