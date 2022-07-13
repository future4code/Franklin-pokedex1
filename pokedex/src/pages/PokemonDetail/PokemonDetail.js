import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { goToHome, goToPokedex } from "../../routes/cordinator"
import styled from "styled-components"


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

const DivFotoFrontal = styled.div`
grid-area: 1 / 1 / 3 / 2;
border:1px solid black;
padding: 10px;
`
const DivFotoCostas = styled.div`
grid-area: 3 / 1 / 5 / 2;
border:1px solid black;
padding: 10px;
`
const DivAtributos = styled.div`
grid-area: 1 / 2 / 5 / 3;
border:1px solid black;
padding: 10px;
`
const DivTipos = styled.div`
grid-area: 1 / 3 / 2 / 4;
border:1px solid black;
padding: 10px;
`
const DivAtaques = styled.div`
grid-area: 2 / 3 / 5 / 4;
border:1px solid black;
padding: 10px;
`
export const PokemonDetail = () => {
    const { id } = useParams();
    
    const navigate = useNavigate()
    return (
        <>
            <Header>
                <H1>Detalhes do seu Pokemon:</H1>
                <Button onClick={() => { goToPokedex(navigate) }}>voltar para pokedex</Button>
                <Button onClick={() => { goToHome(navigate) }}>voltar pra home</Button>
            </Header>
            <Screen>
                <H2NomePokemon>{id}</H2NomePokemon>
                <DivMain>
                    <DivFotoFrontal>
                        <Img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
                    </DivFotoFrontal>
                    <DivFotoCostas>
                        <Img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png" />
                    </DivFotoCostas>
                    <DivAtributos>
                        HP:44<br />
                        ATTACK:76<br />
                        DEFENSE:42<br />
                        SPEED:75<br />
                        ATTACK-SPEED:31<br />
                    </DivAtributos>
                    <DivTipos>
                        <div>Tipo:</div>
                        <div>Fogo <br /> Veneno</div>
                    </DivTipos>
                    <DivAtaques>
                        <div>Ataques:</div>
                        <div>Atq1 <br /> Atq2 <br /> Atq3 </div>
                    </DivAtaques>
                </DivMain>
            </Screen>


        </>

    )
}