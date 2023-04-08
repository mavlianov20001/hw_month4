import axios from "axios"




const PokemonUrl = 'https://pokeapi.co/api/v2'



export const fetchPokemons = async(limit, offset) => {
          try{
               const { data } = await axios.get(PokemonUrl + `/pokemon?limit=${limit}&offset=${offset}`);
               return data;
          }catch(e) {
               console.log("eror");
          }
};

     export const fetchPokemon = (url) =>{};