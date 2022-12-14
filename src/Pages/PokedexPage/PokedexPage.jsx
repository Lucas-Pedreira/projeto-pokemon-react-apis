import React from 'react'

const PokedexPage = (props) => {

  return (
    <>
    <div>PokedexPage</div>
    <button onClick={props.switchPage}>Back</button>
    <button onClick={props.detailPage}>Details</button>
    </>
  )
}

export default PokedexPage