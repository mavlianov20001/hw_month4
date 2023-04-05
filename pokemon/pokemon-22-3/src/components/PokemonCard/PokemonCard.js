import React, { useState, useEffect } from 'react'

const PokemonCard = ({ pokemon }) => {
// sprites.other.dream_world.front_default

const [ info, setInfo] = useState("")

useEffect(() => {
  fetch(pokemon.url)
  .then(response => response.json())
  .then(data => setInfo(data))
})

  return (
    <div className='pokemonCard'>
      <h2 style={{textAlign: 'center'}}>{pokemon.name}</h2>
      <img style={{width: 150, height: 150}} src={info?.sprites?.other?.dream_world?.front_default} alt='#'/> 
    </div>
  )
}

export default PokemonCard