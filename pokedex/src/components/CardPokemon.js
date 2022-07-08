import React, { useEffect } from "react";
import axios from "axios";
import { FOTO_URL } from "../constants/urls";
import { Div, Foto, DivNome, Nome, Button } from "./styledCardPoke";

export const CardPokemon = (props) => {
  // Separando a primeira letra e colocando ela maiúscula
  const str = props.name;
  const nome_pokemon = str[0].toUpperCase() + str.substr(1);
  //
  let index = props.index;
  index++;
  return (
    <Div>
      <Foto
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
      />
      <DivNome>
        <Nome>{nome_pokemon}</Nome>
        <Button>Adicionar na sua Pokedex</Button>
      </DivNome>
    </Div>
  );
};
