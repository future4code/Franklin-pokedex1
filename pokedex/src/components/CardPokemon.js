import React, { useEffect } from "react";
import styled from 'styled-components'
import axios from "axios"
import { FOTO_URL } from "../constants/urls";

const Div = styled.div`
width:230px;
height:330px;
margin:25px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
display:flex;
flex-direction:column;
align-items:center;
background-color: white;
`
const Foto = styled.img`
width:200px;
`

const Nome = styled.div`
margin-top:30px;
font-size:30px;
text-align: center;
color:white;
font-family: sans-serif;
`
const Button = styled.button`
margin: 15px;
background-color: white;
color: #3B4CCA;
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
background-color: #929ff4;
width: 100%;
height:100%;
border-radius: 15px 15px 0 0;
display: flex;
flex-direction: column;
align-items: center;

`



export const CardPokemon = (props) => {
    // Separando a primeira letra e colocando ela maiúscula
    const str = props.name;
    const nome_pokemon = str[0].toUpperCase() + str.substr(1);
    //   
    let index = props.index
    index++
    return (
        <Div>
            <Foto src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`} />
            <DivNome>
                <Nome>{nome_pokemon}</Nome>
                <Button>Adicionar na sua Pokedex</Button>
            </DivNome>

        </Div>
    )
}