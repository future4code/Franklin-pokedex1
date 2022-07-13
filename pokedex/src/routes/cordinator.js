export const goToHome = (navigate) => {
    navigate('/')
}
export const goToPokedex = (navigate) => {
    navigate('/pokedex')
}
export const goToPokemonDetail = (navigate, nomePokemon) => {
    navigate(`/pokemon/${nomePokemon}`)
}   
