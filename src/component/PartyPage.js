import React, {useEffect, useState} from 'react';
import {Col, Container, Dropdown, DropdownButton, Row} from "react-bootstrap";
import MoveList from "./MoveList";
import PartyList from "./PartyList";
import EdgeShadows from "../lib/EdgeShadows";
import pokeball from "../assets/img/pokeball.png"
import pokeballGIF from "../assets/img/GenerousTimelyBrontosaurus-max-1mb.gif"
import {assignAbility} from "../lib/helpers";
import axios from "axios";

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
                    <Container className="mx-0 px-0 position-absolute"
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
                                       fontSize: "2vh",
                                       textShadow: "1px 1px #665f5b",
                                   }}>
                            {/* Individual stat boxes*/}
                            {partyStats[selectedPokemon[1]] ? partyStats[selectedPokemon[1]].map(pokemonStat => (
                                <Row className="mx-0"
                                     key={pokemonStat.name}
                                     style={{
                                         height: `${100 / 6}%`,
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
                                        {pokemonStat.name === "hp" && "HP"}
                                        {pokemonStat.name === "special-attack" && "Sp.Atk"}
                                        {pokemonStat.name === "special-defense" && "Sp.Def"}
                                        {(pokemonStat.name === "attack" || pokemonStat.name === "defense" || pokemonStat.name === "speed") && pokemonStat.name[0].toUpperCase() + pokemonStat.name.slice(1)}
                                    </Col>
                                    {/* Stat points */}
                                    <Col md={7}
                                         style={{
                                             backgroundColor: "#c8d1d8",
                                             borderTopRightRadius: "5px",
                                             borderBottomRightRadius: "5px",
                                         }}>
                                        {pokemonStat.stat}/{pokemonStat.stat}
                                    </Col>
                                </Row>
                            )) : null}
                        </Container>
                        {/* Ability */}
                        <Row className="mx-0 position-absolute"
                             style={{
                                 bottom: "5%",
                                 height: "30%",
                                 width: "100%",
                                 borderTop: "5px solid #463d41",
                                 borderBottom: "5px solid #463d41",
                                 fontSize: "1.5vh",
                                 textShadow: "1px 1px #665f5b",
                             }}>
                            {/* Ability name */}
                            <Row className="mx-auto"
                                 style={{
                                     height: "33%",
                                     width: "100%",
                                     borderBottom: "5px solid #aab6c2",
                                 }}>
                                <Col md={4}
                                     className="my-0 pt-4"
                                     style={{
                                         backgroundColor: "#77889b",
                                         borderRight: "5px solid #aab6c2",
                                         color: "white",
                                     }}>
                                    <span>Ability</span>
                                </Col>
                                <Col md={6}
                                     className="my-0 pt-4"
                                     style={{
                                         backgroundColor: "#c8d1d8",
                                     }}>
                                    {partyAbilities[selectedPokemon[1]] ? partyAbilities[selectedPokemon[1]].names.map(abilityName => (
                                        (abilityName.language.name === "en") && abilityName.name
                                    )): null}
                                </Col>
                                <Col md={2}
                                    style={{
                                    backgroundColor: "#c8d1d8",
                                }}>
                                    <DropdownButton
                                        menuAlign="right"
                                        title=""
                                        variant="secondary"
                                        size="sm"
                                        id="dropdown-menu-align-right"
                                        className="mt-1"
                                    >
                                        {selectedPokemon.length > 0 ? abilityList.map((ability, i) => (
                                            <Dropdown.Item eventKey={i + 1}
                                                           key={i + ":" + ability.name}
                                                           onSelect={() => {
                                                               assignAbility(ability, selectedPokemon, partyAbilities, setPartyAbilities)}}>
                                                {abilityList.length > 0 ? ability.names.map(abilityName => (
                                                    (abilityName.language.name === "en") ? abilityName.name : null
                                                )): null}
                                            </Dropdown.Item>
                                        )) : null}
                                    </DropdownButton>
                                </Col>
                            </Row>
                            <Row className="mx-auto my-auto px-3"
                                 style={{
                                     height: "67%",
                                     width: "100%",
                                     backgroundColor: "#c8d1d8",
                                     alignItems: "center",
                                 }}>
                                {partyAbilities[selectedPokemon[1]] ? partyAbilities[selectedPokemon[1]]["effect_entries"].map(effectDescription => (
                                    (effectDescription.language.name === "en") && effectDescription["short_effect"]
                                )): null}
                            </Row>
                        </Row>

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
                        {selectedPokemon.length > 0 ?
                            <img src={selectedPokemon[0].sprites.other["official-artwork"]["front_default"]}
                                 alt={selectedPokemon[0].name}
                                 className="mx-auto"
                                 style={{width: "80%"}}
                            />
                            : <img src={pokeballGIF} className="m-auto" alt="loading"/>}
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
