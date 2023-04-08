import './App.css';
import { fetchPokemons }from './Api/FetchPokemons'
import { useEffect, useState } from 'react';
import PokemonCard from './Components/PokemonCard'
import Pagination from './Components/Pagination';


function App() {
  
  const [theme, setTheme] = useState('light')
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState (1)
  const [offset, setOffset] = useState(0)
  const [pageCount, setPageCount ] = useState(1)
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    setTheme(newTheme)
  }
  useEffect(() => {
    
    fetchPokemons(limit, offset).then((pokeList) => {
      setPokemonList(pokeList.results);
      const count = Math.ceil(pokeList.count / limit);
      setPageCount(count);
    });
    
  }, [offset])
  
const limit = 9

  const handleNext = () => {
    if (page === pageCount) return;
    setPage((prevState) => (prevState += 1));
    setOffset((prevState) => (prevState += limit));
  };

  const handlePrev = () => {
    if (page === 1) return;
    setPage((prevState) => (prevState -= 1));
    setOffset((prevState) => (prevState -= limit));
  };




  return (
    <>
  <div className={`app ${theme}`}>

      <button onClick={toggleTheme}>Change Theme</button>
        <div className="pokemonList">
          {pokemonList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
        </div>
        <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        page={page}
        pageCount={pageCount}
        
        />
    </div>
    </>
  );
}

export default App;
