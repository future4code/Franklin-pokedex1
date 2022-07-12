import React from "react"
import { useNavigate } from "react-router-dom"
import { goToHome } from "../routes/cordinator"
import { goToPokemonDetail } from "../routes/cordinator"
import { ContextPokedex } from "../context/ContextPokedex";
import { useContext } from "react";
import styled from "styled-components";
import { CardPokedex } from "../components/CardPokedex";

const DivListaPokemons = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    @media (max-width: 500px ){
        grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 500px ){
        grid-template-columns: repeat(1, 1fr);
    }
`
const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
margin: 15px;
background-color: white;
color: #3B4CCA;
font-size: 16px;
font-weight: bold;
border:none;
padding: 10px;
border-radius: 7px;
transition: transform .2s;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
&:hover,
  &:focus {
    transition: transform .2s;
    transform: scale(1.1);
  }
  &:active{
    transform: scale(1.05);
  }
`
const H1 = styled.h1`
font-size:30px;
font-family:monospace;
letter-spacing: 1px;
font-weight: 200;
`

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
         <button onClick={() =>{goToPokemonDetail(navigate)} }>details</button>
        </>
       
    )
} 