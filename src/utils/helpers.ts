
export function calculateHpStat(stat: any, pokemon: any) {
  Math.round(
    ((2 * stat["base_stat"] +
      pokemon.IV[stat.stat.name] +
      pokemon.EV[stat.stat.name] / 4) *
      pokemon.level) /
      100 +
      Number(pokemon.level) +
      10
  );
}

// export function addToParty(pokemon, party, setParty) {
//     if (party.length < 6) { // Check if party is full (6 pokemon)
//         let temp = {
//             pokemonAPI: pokemon,
//             // pokemonSpeciesAPI: {},
//             moveList: [],
//             abilityList: [],
//             level: 100,
//             stats: [],
//             IV: {hp: 0, attack: 0, defense: 0, "special-attack": 0, "special-defense": 0, speed: 0},
//             EV: {hp: 0, attack: 0, defense: 0, "special-attack": 0, "special-defense": 0, speed: 0},
//             ability: {},
//             nature: {},
//             moveSet: [{}, {}, {}, {}],
//             selected: false
//         }
//         setParty(prevPokemon => [...prevPokemon, temp])
//     }
// }

// export function removeFromParty(party, i, setParty, selectedPokemon, setSelectedPokemon, e) {
//     e.stopPropagation()
//     e.nativeEvent.stopImmediatePropagation()
//     if (selectedPokemon === i) { // If pokemon removed === selectedPokemon, remove selectedPokemon
//         setSelectedPokemon(null)
//     } else if (selectedPokemon > -1) { // If selectedPokemon is another pokemon
//         if(selectedPokemon > i) { // If selectedPokemon lower index in the party, shift index of selectedPokemon
//             setSelectedPokemon(prevPokemon => prevPokemon - 1)
//         }
//     }
//     // Splice party[i]
//     let temp = [...party]
//     temp.splice(i, 1)
//     setParty(temp)
// }

// export function selectPokemon(party, i, selectedPokemon, setSelectedPokemon, e) {
//     e.stopPropagation()
//     e.nativeEvent.stopImmediatePropagation()
//     let tempParty = party
//     if (selectedPokemon > -1) { // If a pokemon is selected
//         if (selectedPokemon === i) { // If same pokemon, deselect it
//             tempParty[i] = {...tempParty[i], selected: false}
//             setSelectedPokemon(null)

//         } else { // Else deselect existing selected pokemon, select pokemon
//             tempParty[selectedPokemon] = {...tempParty[selectedPokemon], selected: false}
//             tempParty[i] = {...tempParty[i], selected: true}
//             setSelectedPokemon(i)
//         }
//     } else { // If nothing selected, select pokemon
//         tempParty[i] = {...tempParty[i], selected: true}
//         setSelectedPokemon(i)
//     }
// }

// export function assignMove(move, i, party, setParty, selectedPokemon) {
//     let tempParty = [...party]
//     tempParty[selectedPokemon].moveSet[i] = move
//     setParty(tempParty)
// }

// export function assignAbility(ability, party, setParty, selectedPokemon) {
//     let tempParty = [...party]
//     tempParty[selectedPokemon].ability = ability
//     setParty(tempParty)
// }

// export function assignLevel(level, party, setParty, selectedPokemon) {
//     let tempParty = [...party]
//     tempParty[selectedPokemon].level = level
//     setParty(tempParty)
// }
