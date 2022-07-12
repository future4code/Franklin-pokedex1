import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToPokedex } from "../routes/cordinator"
import { CardPokemon } from "../components/CardPokemon"
import styled from "styled-components"
import axios from "axios"
import { ContextPokedex } from "../context/ContextPokedex";
import { useContext } from "react";

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

export const Home = () => {

    const [pokemons, setPokemons] = useState([])
    
    const navigate = useNavigate()

    const pokedex_state = useContext(ContextPokedex)

    const removerPokemon = (nome) => {
        const listaNovaDePokemons = [... pokemons]
        const index = listaNovaDePokemons.indexOf(nome)
        console.log(index)
        // listaNovaDePokemons.splice(1, 1)
        // console.log(listaNovaDePokemons)
        // setPokemons(listaNovaDePokemons)
        
    } 
    const getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) => {
            setPokemons(response.data.results)
        }).catch((error) => {
            console.log(error.response)
        })
    }
    const listaPokemons = pokemons.map((pokemon, index) => {
        return (
            <CardPokemon
                key={index}
                name={pokemon.name}
                index={index}
                texto1='Adicionar a sua Pokedex'
                texto2='Ver detalhes'
                remove={() => removerPokemon(pokemon.name)}
            />
        )
    })
    useEffect(getPokemons, [])

    const verPokedex = () => {
        console.log(pokedex_state[0])
    }

    return (
        <>
            <Header>
                <H1>Escolha os seus Pokemons!</H1>
                <Button onClick={() => { goToPokedex(navigate) }}> Veja sua Pokedex</Button>
            </Header>
            
                <DivListaPokemons>
                    {listaPokemons}
                </DivListaPokemons>

            <button onClick={verPokedex}>request</button>
        </>

    )
}