import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import PokemonList from "./PokemonList";
import boxTitleBackground from "../assets/img/box_title_background.png"
import PartyList from "./PartyList";

function Home({pokemonList, setPokemonList, party, setParty}) {
    return (
        <>
            <Row className="mx-0" style={{
                width: "100%",
                position: "relative",
                background: "#e0e8e8",
            }}>
                {/* PC Box */}
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
                    {/* Banner */}
                    <Row>
                        <Container className="p-0 my-4 position-relative"
                                   style={{
                                       width: "50%",
                                       borderRadius: "5px",
                                       border: "10px solid #ad7b3e",
                                       borderStyle: "outset"
                                   }}>
                            <span className="d-inline-block"
                                  style={{
                                      border: "5px solid white",
                                      borderStyle: "outset"
                                  }}>
                            <Image src={boxTitleBackground} alt="box" style={{width: "100%"}} fluid/>
                                <p className="position-absolute"
                                   style={{
                                       top: "50%",
                                       left: "50%",
                                       transform: "translate(-50%, -50%)",
                                       fontFamily: "Pokemon",
                                       fontSize: "2rem",
                                       textShadow: "2px 2px white",
                                   }}>
                                    BOX 1
                                </p>
                            </span>
                        </Container>
                    </Row>
                    {/* Pokemon List */}
                    <Row className="m-3" style={{
                        background: "#7df58d",
                        border: '10px solid #ad7b3e',
                        borderRadius: "5px",
                        borderStyle: "outset",

                    }}>
                        <span className="d-inline-block"
                              style={{
                                  border: "10px solid #96ffa4",
                                  borderStyle: "outset",
                                  width: "100%"
                              }}>
                        <PokemonList pokemonList={pokemonList} setPokemonList={setPokemonList} party={party}
                                     setParty={setParty}/>
                        </span>
                    </Row>
                </Col>
                <Col md={4} className="px-0">
                    <PartyList party={party} setParty={setParty}/>
                </Col>
                {/* Edge shadows*/}
                <span style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    boxShadow: "inset -10px -10px 0px 10px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "transparent",
                    zIndex: 1,
                    pointerEvents: "none",
                }}>
                </span>
                <span style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    boxShadow: "inset -15px -15px 0px 15px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "transparent",
                    zIndex: 1,
                    pointerEvents: "none",
                }}>
            </span>
            </Row>
        </>
    );
}

export default Home;
