import react from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Pokedex } from "../pages/Pokedex/Pokedex";
import { PokemonDetail } from "../pages/PokemonDetail/PokemonDetail";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="pokemon" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
