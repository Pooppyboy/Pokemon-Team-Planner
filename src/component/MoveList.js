import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Col, Container, Row, Dropdown, DropdownButton} from "react-bootstrap";
import {assignMove} from "../lib/helpers";

function MoveList({selectedPokemon, partyMoveSets, setPartyMoveSets}) {
    const [moveList, setMoveList] = useState([])

    useEffect(() => {
        if (selectedPokemon.length > 0) {
            let moveListPromiseArrays = selectedPokemon[0].moves.map(moves => (
                axios.get(moves.move.url)
            ))
            Promise.all(moveListPromiseArrays).then(response => {
                let temp = response.map(pokemon => pokemon.data)
                setMoveList(temp)
            });
        } else setMoveList([]);
    }, [selectedPokemon])

    return (
        <Col md={3}
             className="d-inline-block pb-3"
             style={{
                 position: "relative",
                 borderRadius: "2%",
                 border: "5px solid #463d41",
                 boxShadow: "inset -3px -3px 0px 3px rgba(0, 0, 0, 0.1)",
                 backgroundColor: "#f35f56",
                 height: "90%",
                 zIndex: 2,
             }}>
            <Container className="px-0"
                       style={{
                           position: "absolute",
                           top: "10%",
                           left: "5%",
                           height: "80%",
                           width: "90%",
                           border: "5px solid #463d41",
                           borderRadius: "10px",
                           backgroundColor: "#697478",
                           fontFamily: "Pokemon",
                       }}>
                {/* Move set*/}
                {selectedPokemon.length > 0 ? partyMoveSets[selectedPokemon[1]].map((move, i) => (
                    <Row className="mx-0"
                         key={selectedPokemon[0].name + "move" + i}
                         style={{
                             height: "25%",
                             width: "100%",
                             borderRadius: "10px",
                             backgroundColor: "#e1e9e9",
                             border: "3px solid #697478",
                         }}>
                        <Col>
                            <Row className="align-items-end"
                                 style={{
                                     height: "50%",
                                     borderBottom: "2px solid #c9d1d2"
                                 }}>
                                {/* Type Logo*/}
                                <Col md={3}
                                     className="d-flex p-0 justify-content-center align-items-center"
                                     style={{height: "100%"}}>
                                    {Object.keys(move).length !== 0 ?
                                        <img
                                            src={require(`../assets/typeLogos/${move.type.name}.png`).default}
                                            style={{width: "90%"}}
                                            alt={move.type.name}
                                        /> : ""}
                                </Col>
                                {/* Move Name */}
                                <Col md={7} style={{fontSize: "2vh"}}>
                                    {Object.keys(move).length > 0 ? move.names.map(moveName => (
                                        (moveName.language.name === "en") ? moveName.name : null
                                    )) : ""}
                                </Col>
                                {/* Move Selector*/}
                                <Col md={2} style={{height: "100%"}}>
                                    <DropdownButton
                                        menuAlign="right"
                                        title=""
                                        variant="secondary"
                                        size="sm"
                                        id="dropdown-menu-align-right"
                                        className="mt-1"
                                    >
                                        {moveList ? moveList.map((move, j) => (
                                            <Dropdown.Item eventKey={j + 1}
                                                           key={j + ":" + move.name}
                                                           onSelect={() => {
                                                               assignMove(move, i, selectedPokemon, partyMoveSets, setPartyMoveSets)
                                                           }}
                                            >
                                                {moveList ? move.names.map(moveName => (
                                                    (moveName.language.name === "en") ? moveName.name : null
                                                )) : null}
                                            </Dropdown.Item>
                                        )) : null}
                                    </DropdownButton>
                                </Col>
                            </Row>
                            <Row style={{
                                height: "100%",
                            }}>
                                {/* Move Position*/}
                                <Col md={3}>
                                    <Row className="mt-1 justify-content-around"
                                         style={{height: "50%"}}>
                                        {partyMoveSets[selectedPokemon[1]].map((move, pos) => (
                                            pos === i ?
                                                <Col md={5}
                                                     key={"pos" + pos}
                                                     className="px-0">
                                                    <Container style={{
                                                        height: "80%",
                                                        borderRadius: "5px",
                                                        border: "3px solid #3f403b",
                                                        backgroundColor: "#c7574d"
                                                    }}>
                                                    </Container>
                                                </Col>
                                                : <Col md={5}
                                                       key={"pos" + pos}
                                                       className="px-0">
                                                    <Container style={{
                                                        height: "80%",
                                                        borderRadius: "5px",
                                                        border: "3px solid #3f403b",
                                                        backgroundColor: "#c3d4de",
                                                    }}>
                                                    </Container>
                                                </Col>
                                        ))}
                                    </Row>
                                </Col>
                                {/* PP */}
                                <Col md={4} className="text-center" style={{fontSize: "3vh"}}>
                                    PP
                                </Col>
                                {/* PP Number */}
                                <Col md={5} className="px-0" style={{fontSize: "3vh"}}>
                                    15/15
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                )): null}
            </Container>
        </Col>
    );
}

export default MoveList;
