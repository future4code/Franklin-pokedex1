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
grid-column-gap: 20px;
grid-row-gap: 20px;
`
const Img = styled.img`
width:200px;`

const H2NomePokemon = styled.h2`
font-size:40px;
font-family:monospace;
letter-spacing:2px;
font-weight: 300;
`
const Titulo = styled.h3`
font-family: sans-serif;
color: #4f62cc;
text-align: center;
`
const DivDetails = styled.div`
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
background-color: #4f62cc;
padding: 15px;
height: 90%;
border-radius: 25px 25px 0 0;
display: flex;
flex-direction: column;
align-items: center;
color: white;
font-family: monospace;
font-size: 16px;
line-height: 2rem;
`

const DivFotoFrontal = styled.div`
grid-area: 1 / 1 / 3 / 2;
border:1px solid black;
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;
background-color: white;
border: 15px solid white;
border-radius:5px;
`
const DivFotoCostas = styled.div`
grid-area: 3 / 1 / 5 / 2;
border:1px solid black;
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;
background-color: white;
border: 15px solid white;
border-radius:5px;
`
const DivAtributos = styled.div`
grid-area: 1 / 2 / 5 / 3;
border:1px solid black;
padding: 15px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;
background-color: white;
border: none;
border-radius:5px;
display: flex;
flex-direction: column;
`
const DivTipos = styled.div`
grid-area: 1 / 3 / 2 / 4;
border:1px solid black;
padding: 15px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;
background-color: white;
border: none;
border-radius:5px;
display: flex;
flex-direction:column;
`
const DivAtaques = styled.div`
grid-area: 2 / 3 / 5 / 4;
border:1px solid black;
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
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
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
                            Hp: {stats[0]}<br />
                            Attack: {stats[1]}<br />
                            Defense: {stats[2]}<br />
                            Special-Attack: {stats[3]}<br />
                            Special-Defence: {stats[4]}<br />
                            Speed: {stats[5]}
                        </DivDetails>
                    </DivAtributos>
                    <DivTipos>
                        <Titulo>Tipo:</Titulo>
                        <DivDetails>{types[0]} <br />{types[1]}</DivDetails>
                    </DivTipos>
                    <DivAtaques>
                        <Titulo>Ataques:</Titulo>
                        <DivDetails>{attacks[0]} <br /> {attacks[1]} </DivDetails>
                    </DivAtaques>
                </DivMain>
            </Screen>


        </>

    )
}