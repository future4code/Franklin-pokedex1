import React from "react"
import { useNavigate } from "react-router-dom"
import { goToHome } from "../routes/cordinator"
import { goToPokedex } from "../routes/cordinator"

export const PokemonDetail = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Pokemon Detail</h1>
            <button onClick={() => { goToPokedex(navigate) }}>voltar para pokedex</button>
            <button onClick={() => { goToHome(navigate) }}>voltar pra home</button>
        </>

    )
}