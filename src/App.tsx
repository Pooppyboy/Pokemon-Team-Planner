import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/style.css';
// import Home from "./pages/Home";
import Navigation from './components/general/Navigation';
// import PartyPage from "./components/party/PartyPage";
import axios from 'axios';
import { calculateHpStat } from './utils/helpers';
import Home from './pages/home';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [party, setParty] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const queryClient = new QueryClient();

  // // Set each stat of each pokemon within party
  // useEffect(() => {
  //   let active = true;
  //   let tempParty = [...party];
  //   let tempStat = 0;
  //   party.forEach((pokemon, i) => {
  //     tempParty[i].stats = pokemon.pokemonAPI.stats.map((stat) => {
  //       // Stats calculation
  //       if (stat.stat.name === "hp") {
  //         tempStat = calculateHpStat(stat, pokemon);
  //       } else {
  //         tempStat = Math.round(
  //           (((2 * stat["base_stat"] +
  //             pokemon.IV[stat.stat.name] +
  //             pokemon.EV[stat.stat.name] / 4) *
  //             pokemon.level) /
  //             100 +
  //             5) *
  //             (pokemon.nature["increased_stat"] &&
  //             pokemon.nature["increased_stat"].name === stat.stat.name
  //               ? 1.1
  //               : 1) *
  //             (pokemon.nature["decreased_stat"] &&
  //             pokemon.nature["decreased_stat"].name === stat.stat.name
  //               ? 0.9
  //               : 1)
  //         );
  //       }
  //       return { [stat.stat.name]: tempStat };
  //     });
  //   });
  //   if (active) setParty(tempParty);

  //   return () => {
  //     active = false;
  //   };
  // }, [
  //   party.length,
  //   setParty,
  //   party[selectedPokemon] && party[selectedPokemon].level,
  // ]);

  // // Call ability APIs to store in list
  // useEffect(() => {
  //   let active = true;
  //   let tempParty = [...party];
  //   party.forEach((pokemon, i) => {
  //     let abilityListPromiseArrays = pokemon.pokemonAPI.abilities.map(
  //       (ability) => axios.get(ability.ability.url)
  //     );
  //     Promise.all(abilityListPromiseArrays).then((response) => {
  //       tempParty[i].abilityList = response.map((ability) => ability.data);
  //       if (active) setParty(tempParty);
  //     });
  //   });
  //   return () => {
  //     active = false;
  //   };
  // }, [party.length, setParty]);

  // // Call move APIs to store in list
  // useEffect(() => {
  //   let active = true;
  //   let tempParty = [...party];
  //   party.forEach((pokemon, i) => {
  //     let moveListPromiseArrays = pokemon.pokemonAPI.moves.map((moves) =>
  //       axios.get(moves.move.url)
  //     );
  //     Promise.all(moveListPromiseArrays).then((response) => {
  //       tempParty[i].moveList = response
  //         .map((move) => move.data)
  //         .sort((a, b) => {
  //           return a.type.name.localeCompare(b.type.name);
  //         });
  //       if (active) setParty(tempParty);
  //     });
  //   });
  //   return () => {
  //     active = false;
  //   };
  // }, [party.length, setParty]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="party" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
