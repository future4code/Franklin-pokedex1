import React, { useContext, useEffect } from "react";
import styled from 'styled-components'
import axios from "axios"
import { useState } from "react";
import { ContextPokedex } from "../context/ContextPokedex";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetail } from "../routes/cordinator";

const Div = styled.div`
width:230px;
height:400px;
margin:25px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;
display:flex;
flex-direction:column;
align-items:center;
background-color: white;
border: 15px solid white;
border-radius:5px;
`
const Foto = styled.img`
width:200px;
`

const Nome = styled.div`
margin:20px;
font-size:30px;
text-align: center;
color:white;
font-family: sans-serif;
`
const Button = styled.button`
margin: 12px;
background-color: white;
color: #4f62cc;
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
const DivNome = styled.div`
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
background-color: #4f62cc;
width: 100%;
height:100%;
border-radius: 25px 25px 0 0;
display: flex;
flex-direction: column;
align-items: center;
`

export const CardPokedex = (props) => {

    const navigate = useNavigate()

    const [imgURL, setImgURL] = useState('')

    const getPokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`).then((response) => {
            // setImgURL(response.data.sprites.front_default)
            setImgURL(response.data.sprites.other['official-artwork'].front_default)
        }).catch((error) => {
            console.log(error.response)
        })
        console.log(imgURL);
    }

    useEffect(getPokemons,[props])

    const str = props.name;
    const nome_pokemon = str[0].toUpperCase() + str.substr(1);
    //   
    let index = props.index;
    index++;
    //
    const pokedex_state = useContext(ContextPokedex)

    const removerDaPokedex = () => {
    //   const newPokedex = [... pokedex_state[0]]
    //   newPokedex.splice(props.name, 1)
    //   pokedex_state[1](newPokedex)
      console.log('remove')
    }

    
    return (

        <Div>
            {imgURL ? <Foto src={imgURL} />  : console.log('error') }
            <DivNome>
                <Nome>{nome_pokemon}</Nome>
                <Button onClick={removerDaPokedex}>{props.texto1}</Button>
                <Button onClick={() => {goToPokemonDetail(navigate, nome_pokemon)}}>{props.texto2}</Button>
            </DivNome>
        </Div>
       
    )
}