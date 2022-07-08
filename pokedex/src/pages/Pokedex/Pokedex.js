import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/cordinator";
import { goToPokemonDetail } from "../../routes/cordinator";

export const Pokedex = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Pokedex</h1>
      <button
        onClick={() => {
          goToPokemonDetail(navigate);
        }}
      >
        detalhes do pokemon
      </button>
      <button
        onClick={() => {
          goToHome(navigate);
        }}
      >
        voltar pra home
      </button>
    </>
  );
};
