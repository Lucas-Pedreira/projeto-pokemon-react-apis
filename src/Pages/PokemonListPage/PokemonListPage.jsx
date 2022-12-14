import React from 'react'
import Header from '../../Components/Header/Header'

const PokemonListPage = (props) => {
  return (
    <div>
    <Header/>
    <div>PokemonListPage</div>
    <button onClick={props.dexPage}>Pokedex</button>
    <button onClick={props.detailPage}>Details</button>
    </div>
  )
}

export default PokemonListPage