import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToPokedex } from "../../routes/cordinator"
import { CardPokemon } from "../../components/CardPokemon"
import axios from "axios"
import { ContextPokedex } from "../../context/ContextPokedex";
import { useContext } from "react";
import { DivListaPokemons, Header, H1, Button } from "./styledHome"


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