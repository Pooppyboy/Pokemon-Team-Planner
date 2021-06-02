import React from 'react';
import {Col, Container, Dropdown, DropdownButton, Row} from "react-bootstrap";
import {assignAbility} from "../lib/helpers";

function StatsSummary({
                          partyStats,
                          selectedPokemon,
                          partyAbilities,
                          setPartyAbilities,
                          abilityList
                      }) {
    return (
        <>
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
                        <Col md={5}
                             className="my-0 pt-4"
                             style={{
                                 backgroundColor: "#77889b",
                                 borderRight: "5px solid #aab6c2",
                                 color: "white",
                             }}>
                            <span>Ability</span>
                        </Col>
                        <Col md={5}
                             className="my-0 pt-4"
                             style={{
                                 backgroundColor: "#c8d1d8",
                             }}>
                            {partyAbilities[selectedPokemon[1]] ? partyAbilities[selectedPokemon[1]].names.map(abilityName => (
                                (abilityName.language.name === "en") && abilityName.name
                            )) : null}
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
                                                       assignAbility(ability, selectedPokemon, partyAbilities, setPartyAbilities)
                                                   }}>
                                        {abilityList.length > 0 ? ability.names.map(abilityName => (
                                            (abilityName.language.name === "en") ? abilityName.name : null
                                        )) : null}
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
                        )) : null}
                    </Row>
                </Row>

            </Container>
        </>
    );
}

export default StatsSummary;
