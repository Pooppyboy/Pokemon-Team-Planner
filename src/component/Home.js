import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PokemonList from "./PokemonList";
import boxTitleBackground from "../img/box_title_background.png"
import Party from "./Party";

function Home({pokemonList, setPokemonList, party, setParty}) {
    return (
        <>
            <Row className="mx-0" style={{width: "100%"}}>
                <Col md={9}>
                    <Row style={{background: "#fff9f2"}}>

                        <Container className="p-0 my-4"
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
                            <img src={boxTitleBackground} alt="box" style={{width: "100%"}}/>
                            </span>
                        </Container>

                    </Row>
                    <Row style={{
                        background: "#7df58d",
                        border: '10px solid #ad7b3e',
                        borderRadius: "5px",
                        borderStyle: "outset"
                    }}>
                        <span className="d-inline-block"
                              style={{
                                  border: "10px solid #96ffa4",
                                  borderStyle: "outset"
                              }}>
                        <PokemonList pokemonList={pokemonList} setPokemonList={setPokemonList} party={party} setParty={setParty}/>
                        </span>
                    </Row>
                </Col>
                <Col md={3}
                     style={{
                         background: "#fff6a8",
                         boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2)",
                         border: "10px solid black",
                         borderStyle: "outset",
                         borderRadius: "5px"
                     }}>
                    <Container className="text-center">
                        <p style={{fontFamily:"Odibee Sans", fontSize: "36px"}}>Party</p>
                    </Container>
                    <Party party={party} setParty={setParty}/>
                </Col>
            </Row>
        </>
    );
}

export default Home;
