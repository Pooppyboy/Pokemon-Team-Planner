import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import MoveList from "./MoveList";
import PartyList from "./PartyList";
import EdgeShadows from "../lib/EdgeShadows";
import pokeball from "../assets/img/pokeball.png"
import pokeballGIF from "../assets/img/GenerousTimelyBrontosaurus-max-1mb.gif"
import axios from "axios";
import StatsSummary from "./StatsSummary";

function PartyPage({
                       party,
                       setParty,
                       selectedPokemon,
                       setSelectedPokemon,
                       partyMoveSets,
                       setPartyMoveSets,
                       partyAbilities,
                       setPartyAbilities
                   }) {
    const [partyStats, setPartyStats] = useState([])
    const [abilityList, setAbilityList] = useState([])

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
                if (stat.stat.name === "hp") {
                    tempStat = (((2 * stat["base_stat"] + IV + (EV / 4)) * level) / 100) + level + 10
                } else {
                    tempStat = ((((2 * stat["base_stat"] + IV + (EV / 4)) * level) / 100) + 5) * nature
                }
                return {name: stat.stat.name, stat: tempStat}

            })
        })
        setPartyStats(tempPartyStats)
    }, [party])

    // Call ability APIs to store in list
    useEffect(() => {
        if(selectedPokemon.length > 0) {
            let abilityListPromiseArrays = selectedPokemon[0].abilities.map(ability => (
                axios.get(ability.ability.url)
            ))
            Promise.all(abilityListPromiseArrays).then(response => {
                let temp = response.map(ability => ability.data)
                setAbilityList(temp)
            });
        }
    },[selectedPokemon])

    return (
        <>
            {/* Main Row below Nav */}
            <Row className="mx-0 position-relative" style={{
                width: "100%",
                height: "88vh",
                background: "#e0e8e8",
                fontFamily: "Pokemon",
            }}>
                {/* Stats Summary */}
                <Col md={3} className="d-inline-block px-0 position-relative">
                    <StatsSummary partyStats={partyStats}
                                  selectedPokemon={selectedPokemon}
                                  partyAbilities={partyAbilities}
                                  setPartyAbilities={setPartyAbilities}
                                  abilityList={abilityList}
                                  />

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
                            <Row className="ml-2 mt-1" style={{width: "100%", color: "#3c4041"}}>
                                Lv.100
                            </Row>
                        </Col>
                    </Row>
                    {/* Artwork */}
                    <Row className="mt-5"
                        style={{height: "50%"}}>
                        {selectedPokemon.length > 0 ?
                            <img src={selectedPokemon[0].sprites.other["official-artwork"]["front_default"]}
                                 alt={selectedPokemon[0].name}
                                 className="mx-auto"
                                 style={{width: "80%"}}
                            />
                            : <img src={pokeballGIF} className="m-auto" alt="loading"/>}
                    </Row>
                    {/*/!* Move Desc *!/*/}
                    {/*<Row className="mx-auto mt-2"*/}
                    {/*     style={{height: "20%"}}>*/}
                    {/*    /!* Invisible Spacer *!/*/}
                    {/*    <Col md={1}>*/}
                    {/*    </Col>*/}
                    {/*    /!* Container *!/*/}
                    {/*    <Col className="px-0"*/}
                    {/*         style={{*/}
                    {/*             right: 0,*/}
                    {/*             width: "100%",*/}
                    {/*             border: "7px solid #637787",*/}
                    {/*             borderBottom: "none",*/}
                    {/*             borderTopLeftRadius: "10px",*/}
                    {/*             borderTopRightRadius: "10px",*/}
                    {/*             fontFamily: "Pokemon",*/}
                    {/*             fontSize: "3vh",*/}
                    {/*             color: "white",*/}
                    {/*             textShadow: "1px 1px #665f5b",*/}
                    {/*         }}>*/}
                    {/*        /!* Move Name *!/*/}
                    {/*        <Row className="mx-0 pl-2 align-content-center"*/}
                    {/*             style={{*/}
                    {/*                 backgroundColor: "#909eaa",*/}
                    {/*                 height: "30%",*/}
                    {/*                 width: "100%",*/}
                    {/*             }}>*/}
                    {/*            /!*{selectedPokemon.length > 0*!/*/}
                    {/*            /!*    ? <span className="pt-3 my-0">{selectedPokemon[0].name.toUpperCase()}</span>*!/*/}
                    {/*            /!*    : null}*!/*/}
                    {/*            Move Name*/}
                    {/*        </Row>*/}
                    {/*        /!* Move Desc *!/*/}
                    {/*        <Row className="mx-0 position-relative"*/}
                    {/*             style={{*/}
                    {/*                 height: "70%",*/}
                    {/*                 width: "100%",*/}
                    {/*                 color: "#3c4041",*/}
                    {/*                 backgroundColor: "#e0e8e8",*/}
                    {/*                 zIndex: 2,*/}
                    {/*             }}>Move Desc</Row>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Col>
                {/* Move List */}
                <MoveList selectedPokemon={selectedPokemon} party={party} partyMoveSets={partyMoveSets}
                          setPartyMoveSets={setPartyMoveSets}/>
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
