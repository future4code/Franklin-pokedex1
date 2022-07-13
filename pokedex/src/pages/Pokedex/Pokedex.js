import React from "react"
import { useNavigate } from "react-router-dom"
import { goToHome } from "../../routes/cordinator"
import { ContextPokedex } from "../../context/ContextPokedex";
import { useContext } from "react";
import { CardPokedex } from "../../components/CardPokedex";
import { DivListaPokemons, Button, Header, H1 } from "../Home/styledHome";



export const Pokedex = () => {
    const navigate = useNavigate()

    const pokedex_state = useContext(ContextPokedex)

    const listaPokemons = pokedex_state[0].map((pokemon,index) => {
        
        return (
            <CardPokedex
                key={index}
                name={pokemon}
                index={index}
                texto1='Remover da sua Pokedex'
                texto2='Ver detalhes'
            />
        )
    })
    return(
        <>
         <Header>
                <H1>Sua Pokedex</H1>
                <Button onClick={() => { goToHome(navigate) }}> Volte para a tela principal</Button>
            </Header>
         <DivListaPokemons>
            {listaPokemons}
         </DivListaPokemons>
        </>
       
    )
} 