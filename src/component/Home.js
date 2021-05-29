import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PokemonList from "./PokemonList";
import boxTitleBackground from "../img/box_title_background.png"

function Home({pokemonList, setPokemonList}) {
    return (
        <>
            <Row className="mx-0" style={{width: "100%"}}>
                <Col md={9}>
                    <Row style={{background: "#fff9f2"}}>

                        <Container className="p-0 my-4"
                                   style={{width: "50%", borderRadius: "5px", border: "10px solid #ad7b3e", borderStyle: "outset"}}>
                            <span className="d-inline-block" style={{border: "5px solid white", borderStyle: "outset"}}>
                            <img src={boxTitleBackground} alt="box" style={{width: "100%"}}/>
                            </span>
                            {/*<Container className="d-flex justify-content-between mb-5 py-2 font-weight-bolder" style={{width: "50%", background: "white", borderRadius: "5px", border: "3px solid green", alignItems: "center"}}>*/}
                            {/*    <span style={{fontSize: "3rem", fontFamily: "VT323"}}>{"<"}</span>*/}
                            {/*    <span style={{fontFamily: "VT323", fontSize: "3rem", fontWeight: "lighter"}}>BOX</span>*/}
                            {/*    <span style={{fontSize: "3rem", fontFamily: "VT323"}}>></span>*/}
                        </Container>

                    </Row>
                    <Row style={{background: "#5edb6e", border: '10px solid #ad7b3e',borderRadius: "5px", borderStyle: "outset"}}>
                        <span className="d-inline-block" style={{border: "5px solid #52eb67", borderStyle: "outset"}}>
                        <PokemonList pokemonList={pokemonList} setPokemonList={setPokemonList}/>
                        </span>
                    </Row>
                </Col>
                <Col md={3}
                     style={{boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2)", border: "10px solid green", borderStyle: "outset"}}>
                    Party
                </Col>
            </Row>
        </>
    );
}

export default Home;
