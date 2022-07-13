import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { goToHome, goToPokedex } from "../../routes/cordinator"

export const PokemonDetail = () => {
    const {id} = useParams();
    console.log(id)
    const navigate = useNavigate()
    return (
        <>
            <h1>Pokemon Detail</h1>
            <button onClick={() => { goToPokedex(navigate) }}>voltar para pokedex</button>
            <button onClick={() => { goToHome(navigate) }}>voltar pra home</button>
        </>

    )
}