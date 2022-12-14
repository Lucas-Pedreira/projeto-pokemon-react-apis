import React from 'react'
import styled from 'styled-components'
import { HeaderContainer } from './Header.styled'
import logo from "../../assets/logo.svg"

const Header = (props) => {
  return (
    <HeaderContainer>
      <div></div>
      <div>
        <img src={logo} alt="" />
      </div>
      <button onClick={props.dexPage}>Ver minha Pokedex</button>
    </HeaderContainer>
  )
}

export default Header