export function addToParty(pokemon, party, setParty) {
    if(party.length < 6) {
        setParty(prevPokemon => [...prevPokemon, pokemon])
    }
}

export function removeFromParty(index, party, setParty, selectedPokemon, setSelectedPokemon, e) {
    e.nativeEvent.stopImmediatePropagation()
    if (selectedPokemon === party[index]) {
        setSelectedPokemon([])
    }
    let temp = [...party]
    temp.splice(index, 1)
    setParty(temp)
}

export function selectPokemon(pokemon, i, selectedPokemon, setSelectedPokemon, e) {
    e.nativeEvent.stopImmediatePropagation()
    if(selectedPokemon[1] === i) setSelectedPokemon([])
    else setSelectedPokemon([pokemon, i])
}

export function assignMove(move, i, selectedPokemon, partyMoveSets, setPartyMoveSets) {
    let temp = [...partyMoveSets]
    temp[selectedPokemon[1]][i] = move
    setPartyMoveSets(temp)
}

export function assignAbility(ability, selectedPokemon, partyAbilities, setPartyAbilities) {
    let temp = [...partyAbilities]
    temp[selectedPokemon[1]] = ability
    setPartyAbilities(temp)
}
