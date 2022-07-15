import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToPokedex } from "../../routes/cordinator"
import { CardPokemon } from "../../components/CardPokemon"
import axios from "axios"
import { DivListaPokemons, Header, H1, Button } from "./styledHome"


export const Home = () => {

    const [pokemons, setPokemons] = useState([])
    
    const navigate = useNavigate()

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
            />
        )
    })
    useEffect(getPokemons, [])

    return (
        <>
            <Header>
                <H1>Escolha os seus Pokemons!</H1>
                <Button onClick={() => { goToPokedex(navigate) }}> Veja sua Pokedex</Button>
            </Header>
            
                <DivListaPokemons>
                    {listaPokemons}
                </DivListaPokemons>
        </>

    )
}