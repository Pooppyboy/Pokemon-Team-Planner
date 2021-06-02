export function addToParty(pokemon, party, setParty) {
    if(party.length < 6) {
        setParty(prevPokemon => [...prevPokemon, pokemon])
    }
}

export function removeFromParty(index, party, setParty, selectedPokemon, setSelectedPokemon) {
    if (selectedPokemon === party[index]) {
        setSelectedPokemon([])
    }
    let temp = [...party]
    temp.splice(index, 1)
    setParty(temp)
}

export function selectPokemon(pokemon, i, selectedPokemon, setSelectedPokemon) {
    if(selectedPokemon[1] === i) setSelectedPokemon([])
    else setSelectedPokemon([pokemon, i])
}
