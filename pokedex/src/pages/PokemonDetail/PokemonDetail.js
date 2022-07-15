import React, { useState, useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"
import { goToHome, goToPokedex } from "../../routes/cordinator"
import styled from "styled-components"
import axios from "axios"


//header//
export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Button = styled.button`
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
export const H1 = styled.h1`
font-size:30px;
font-family:monospace;
letter-spacing: 1px;
font-weight: 200;
`

/// fim do header
const Screen = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
`
const DivMain = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 30px;
grid-row-gap: 30px;
height: 500px;
margin-bottom: 50px;
`
const Img = styled.img`
width:200px;
`

const H2NomePokemon = styled.h2`
font-size:40px;
font-family:monospace;
letter-spacing:2px;
font-weight: 300;
`
const Titulo = styled.h3`
font-family: sans-serif;
letter-spacing: 3px;
font-weight: 500;
color: white;
text-align: center;
background-color: #4f62cc;
padding: 20px;
`
const DivDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding: 15px;
height: 90%;
display: flex;
flex-direction: column;
color: #4f62cc;
align-items: center;
font-family: monospace;
font-size: 25px;
`

const DivFotoFrontal = styled.div`
display: flex;
align-items: center;
justify-content: center;
grid-area: 1 / 1 / 3 / 2;
`
const DivFotoCostas = styled.div`
display: flex;
align-items: center;
justify-content: center;
grid-area: 3 / 1 / 5 / 2;
`
const DivAtributos = styled.div`
grid-area: 1 / 2 / 5 / 3;
padding: 15px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;
background-color: white;
border-radius:5px;
display: flex;
flex-direction: column;
`
const DivTipos = styled.div`
grid-area: 1 / 3 / 2 / 4;
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding: 15px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;
background-color: white;
border: none;
border-radius:5px;
`
const DivAtaques = styled.div`
grid-area: 2 / 3 / 5 / 4;
padding: 15px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;
background-color: white;
border: none;
border-radius:5px;
display: flex;
flex-direction: column;
`

export const PokemonDetail = () => {
    const { id } = useParams();
    const nome_pokemon = id[0].toUpperCase() + id.substr(1);
    
    const navigate = useNavigate()

    const [frontImgURL, setFrontImgURL] = useState('');
    const [backImgURL, setBackImgURL] = useState('');
    const [stats, setStats] = useState([]);
    const [types, setTypes] = useState([]);
    const [attacks, setAttacks] = useState([]);



    const getPokemons = () => {
        //transformando o nome (id) em minúscula
        //pois em alguns pokemons a API estava falhando ao pesquisar Charizard (primeira letra maiúscula)
        const idLowerCase = id.toLowerCase()
        ///
        axios.get(`https://pokeapi.co/api/v2/pokemon/${idLowerCase}`).then((response) => {
            // setImgURL(response.data.sprites.front_default)
            setFrontImgURL(response.data.sprites.front_default);
            setBackImgURL(response.data.sprites.back_default);
            //substituir por um map
            setStats([
                response.data.stats[0].base_stat,
                response.data.stats[1].base_stat,
                response.data.stats[2].base_stat, 
                response.data.stats[3].base_stat, 
                response.data.stats[4].base_stat, 
                response.data.stats[5].base_stat
            ]);
            setTypes([
                response.data.types[0].type.name,
            ])
            setAttacks([
                response.data.abilities[0].ability.name,
                response.data.abilities[1].ability.name
            ])

        }).catch((error) => {
            console.log(error.response)
        })
    }

    useEffect(getPokemons)

    return (
        <>
            <Header>
                <H1>Detalhes do seu Pokemon:</H1>
                <Button onClick={() => { goToPokedex(navigate) }}>voltar para pokedex</Button>
                <Button onClick={() => { goToHome(navigate) }}>voltar pra home</Button>
            </Header>
            <Screen>
                <H2NomePokemon>{nome_pokemon}</H2NomePokemon>
                <DivMain>
                    <DivFotoFrontal>
                        <Img src={frontImgURL} />
                    </DivFotoFrontal>
                    <DivFotoCostas>
                        <Img src={backImgURL} />
                    </DivFotoCostas>
                    <DivAtributos>
                        <Titulo>Atributos:</Titulo>
                        <DivDetails>
                            <span>Hp: {stats[0]}</span>
                            <span>Attack: {stats[1]}</span>
                            <span>Defense: {stats[2]}</span>
                            <span>Special-Attack: {stats[3]}</span>
                            <span>Special-Defence: {stats[4]}</span>
                            <span>Speed: {stats[5]}</span>
                        </DivDetails>
                    </DivAtributos>
                    <DivTipos>
                        <Titulo>Tipo:</Titulo>
                        <DivDetails>
                        <span>{types[0]}</span>
                        <span>{types[1]}</span>
                            </DivDetails>
                    </DivTipos>
                    <DivAtaques>
                        <Titulo>Ataques:</Titulo>
                        <DivDetails>
                            <span>{attacks[0]}</span>
                            <span>{attacks[1]}</span>
                        </DivDetails>
                    </DivAtaques>
                </DivMain>
            </Screen>


        </>

    )
}