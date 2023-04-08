import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  "../App.css"
import { fetchPokemon, fetchPokemons } from '../Api/FetchPokemons';
const PokemonCard = ({pokemon}) => {
const [imgPokemon, setImagePokemon] = useState()
  const axiosPokemon = async () => {
    try{
      const {data} = await axios(pokemon.url);
      console.log(data);
      const img = data.sprites.other.dream_world.front_default;
      setImagePokemon(img)
    }catch (eror) {
console.log(eror);
    }
  }

useEffect (() =>{

  if(pokemon.url){
axiosPokemon()
  }
}, [pokemon.url])




  return (
    <div className='pokemonCard'>
      <img className='pokemonImg' src={imgPokemon} alt="" />
      {pokemon.name}
    </div>
  )
}

export default PokemonCard