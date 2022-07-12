
import { Home } from './pages/Home';
import { Pokedex } from './pages/Pokedex';
import { PokemonDetail } from './pages/PokemonDetail';
import { Routers } from './routes/Routers';
import { ContextPokedex } from "./context/ContextPokedex";
import { useContext } from "react";
import { useState } from 'react';

function App() {
  const [pokedex, setPokedex] = useState([])
  // const obj = {
  //   estado: pokedex,
  //   func: setPokedex
  // }
  return (
    <div>
      <ContextPokedex.Provider value={[pokedex, setPokedex]}>
        <Routers />
      </ContextPokedex.Provider>
    </div>
  );
}

export default App;
