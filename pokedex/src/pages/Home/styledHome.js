import styled from "styled-components"

export const DivListaPokemons = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    @media (max-width: 500px ){
        grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 500px ){
        grid-template-columns: repeat(1, 1fr);
    }
`

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
