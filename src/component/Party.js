import React from 'react';
import {Col, Row} from "react-bootstrap";
import {removeFromParty} from "../lib/helpers";

function Party({party, setParty}) {

    function getType(pokemonType) {
        let types = ""
        pokemonType.map(type => (
            types += `${type.type.name}${type.slot} `
        ))
        return `${types}`
    }

    return (
        <Row>
            {party.length > 0 ? party.map((pokemon, i) => (
                <Col key={i + 1} md={6} onClick={() => removeFromParty(i, party, setParty)}>
                <span
                    className={`d-inline-block ${getType(pokemon.types)}`}
                    style={{
                        borderWidth: "5px",
                        borderStyle: "solid",
                        borderRadius: "50%",
                        width: "100%"
                    }}>
                            <img style={{width: "100%"}} src={pokemon.sprites["front_default"]}
                                 alt={pokemon.name}/>
                                </span>
                </Col>
            )) : null}
        </Row>
    );
}



export default Party;
