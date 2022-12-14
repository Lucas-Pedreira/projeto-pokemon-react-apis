import React from 'react'
import { useState } from "react"
import PokemonListPage from "./Pages/PokemonListPage/PokemonListPage"
import PokedexPage from "./Pages/PokedexPage/PokedexPage"
import PokemonDetailPage from "./Pages/PokemonDetailPage/PokemonDetailPage"
import Header from './Components/Header/Header'

const App = () => {
  const [page, setPage] = useState (1);

  const switchPage = () => {
    setPage(1)
  }

  switch (page) {
    case 1:
      return (
        <Header dexPage={() => setPage(2)} detailPage={() => setPage(3)} />
      )
     case 2:
      return (
        < PokedexPage  switchPage={() => setPage(1)} detailPage={() => setPage (3)}/>
      ) 
     case 3:
      return (
        <PokemonDetailPage switchPage={() => setPage(1)}/>
      )   
     default:
      return (
        <p>Algo deu errado</p>
      )   
  }
  
}

export default App