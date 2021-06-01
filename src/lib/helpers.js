export function addToParty(pokemon, party, setParty) {
    if(party.length < 6) {
        setParty(prevPokemon => [...prevPokemon, pokemon])
    }
}

export function removeFromParty(index, party, setParty) {
    let temp = [...party]
    temp.splice(index, 1)
    setParty(temp)
}

export function selectPokemon(pokemon, setSelectedPokemon) {
    setSelectedPokemon(pokemon)
}
