import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PartyList from "./PartyList";
import EdgeShadows from "../lib/EdgeShadows";
import MoveList from "./MoveList";
import pokeball from "../assets/img/pokeball.png"

function PartyPage({pokemonList, setPokemonList, party, setParty, selectedPokemon, setSelectedPokemon}) {
    const [partyStats, setPartyStats] = useState([])

    // For stat calculation
    const level = 100
    const nature = 1
    const IV = 0
    const EV = 0

    // Set each stat of each pokemon within party
    useEffect(() => {
        let tempPartyStats = []
        let tempStat
        party.forEach((pokemon, i) => {
            tempPartyStats[i] = pokemon.stats.map(stat => {
                // Stats calculation
                if(stat.stat.name === "hp") {
                    tempStat = (((2 * stat["base_stat"] + IV + (EV / 4)) * level) / 100) + level + 10
                } else {
                    tempStat = ((((2 * stat["base_stat"] + IV + (EV / 4)) * level) / 100) + 5) * nature
                }
                return {name: stat.stat.name, stat: tempStat}

            })
        })
        setPartyStats(tempPartyStats)
    },[party])

    return (
        <>
            {/* Main Row below Nav */}
            <Row className="mx-0 position-relative" style={{
                width: "100%",
                height: "88vh",
                background: "#e0e8e8",
            }}>
                {/* Stats Summary */}
                <Col md={3} className="d-inline-block px-0 position-relative">
                    {/* Red Banner */}
                    <Row className="mx-0"
                         style={{
                             position: "absolute",
                             top: "3%",
                             background: "#ef6155",
                             height: "10%",
                             width: "100%",
                             borderTop: "5px solid #637787",
                             borderBottom: "5px solid #637787",
                             zIndex: 0,
                         }}>
                    </Row>
                    {/* Overall Red Container */}
                    <Container className="mx-0 position-absolute"
                               style={{
                                   bottom: 0,
                                   borderTopRightRadius: "10px",
                                   borderTop: "5px solid #463d41",
                                   borderRight: "5px solid #463d41",
                                   boxShadow: "inset -3px -3px 0px 3px rgba(0, 0, 0, 0.1)",
                                   backgroundColor: "#f15f58",
                                   height: "90%",
                                   zIndex: 2,
                               }}>
                        {/* Stat Summary box */}
                            <Container className="px-0 mx-0 position-absolute"
                                       style={{
                                           top: "10px",
                                           right: "10px",
                                           borderRadius: "10px",
                                           border: "5px solid #463d41",
                                           backgroundColor: "#607986",
                                           height: "60%",
                                           width: "90%",
                                           zIndex: 2,
                                           fontFamily: "Pokemon",
                                           fontSize: "2vh",
                                           textShadow: "1px 1px #665f5b",
                                       }}>
                                {/* Individual stat boxes*/}
                                {partyStats[selectedPokemon[1]] ? partyStats[selectedPokemon[1]].map(pokemonStats => (
                                    <Row className="mx-0"
                                         style={{
                                             height: `${100/6}%`,
                                             border: "2px solid #607986",
                                             borderRadius: "5px",
                                         }}>
                                        {/* Name of Stat*/}
                                        <Col md={5}
                                             className="text-center"
                                             style={{
                                                 backgroundColor: "#77889b",
                                                 borderRight: "4px solid #aab6c2",
                                                 borderTopLeftRadius: "5px",
                                                 borderBottomLeftRadius: "5px",
                                                 color: "white",
                                             }}>
                                            {pokemonStats.name === "hp" && "HP"}
                                            {pokemonStats.name === "special-attack" && "Sp.Atk"}
                                            {pokemonStats.name === "special-defense" && "Sp.Def"}
                                            {(pokemonStats.name === "attack" || pokemonStats.name === "defense" || pokemonStats.name === "speed") && pokemonStats.name[0].toUpperCase() + pokemonStats.name.slice(1)}
                                        </Col>
                                        {/* Stat points */}
                                        <Col md={7}
                                             style={{
                                                 backgroundColor: "#c8d1d8",
                                                 borderTopRightRadius: "5px",
                                                 borderBottomRightRadius: "5px",
                                             }}>
                                            {pokemonStats.stat}/{pokemonStats.stat}
                                        </Col>
                                    </Row>
                                )): null}
                            </Container>
                    </Container>
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
                             height: "10%",
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
                    <Row className="mx-auto mt-2"
                         style={{height: "15%"}}>
                        {/* Invisible spacer */}
                        <Col md={1}>
                        </Col>
                        {/* Container */}
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
                                 textShadow: "1px 1px #665f5b",
                             }}>
                            {/* Name Row */}
                            <Row className="mx-0 pl-2 align-content-center"
                                 style={{
                                     backgroundColor: "#909eaa",
                                     width: "100%",
                                 }}>
                                <img src={pokeball}
                                     alt="pokeball"
                                     className="my-1 mr-1"
                                     style={{width: "40px"}}
                                />
                                {selectedPokemon.length > 0
                                    ? <span className="pt-3 my-0">{selectedPokemon[0].name.toUpperCase()}</span> : null}
                            </Row>
                            {/* Level Row */}
                            <Row className="ml-2 mt-1" style={{width: "100%", color: "#3c4041"}}>Lv.100</Row>
                        </Col>
                    </Row>
                    {/* Artwork */}
                    <Row style={{height: "50%"}}>
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
                         style={{height: "20%"}}>
                        {/* Invisible Spacer */}
                        <Col md={1}>
                        </Col>
                        {/* Container */}
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
                                 textShadow: "1px 1px #665f5b",
                             }}>
                            {/* Move Name */}
                            <Row className="mx-0 pl-2 align-content-center"
                                 style={{
                                     backgroundColor: "#909eaa",
                                     height: "30%",
                                     width: "100%",
                                 }}>
                                {/*{selectedPokemon.length > 0*/}
                                {/*    ? <span className="pt-3 my-0">{selectedPokemon[0].name.toUpperCase()}</span>*/}
                                {/*    : null}*/}
                                Move Name
                            </Row>
                            {/* Move Desc */}
                            <Row className="mx-0 position-relative"
                                 style={{
                                     height: "70%",
                                     width: "100%",
                                     color: "#3c4041",
                                     backgroundColor: "#e0e8e8",
                                     zIndex: 2,
                                 }}>Move Desc</Row>
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

export default PartyPage;
