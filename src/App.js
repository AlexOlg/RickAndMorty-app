import React, {useEffect,useState} from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {

const [characters, setCharacters] = useState([])
const [info, setInfo] = useState({})

const API_URL = "https://rickandmortyapi.com/api/character";

const fetchCharacters = (API_URL) => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      setCharacters(data.results)
      setInfo(data.info)
    })
    .catch((error) => console.log(error))
  }
  
  const onNext = () => {
    fetchCharacters(info.next)
  }
  const onPrevious = ()=> {
    fetchCharacters(info.prev)
  }

  useEffect(() => {
    fetchCharacters(API_URL)
  }, [])
  
  return (
    <>
    <div className="App">
      <Navbar brand="Rick and Morty app"/>
      <div className="container mt-5">
        <Pagination 
        prev={info.prev} 
        next={info.next} 
        onNext={onNext} 
        onPrevious={onPrevious} />
        <Characters characters={characters}/>
        <Pagination 
        prev={info.prev} 
        next={info.next} 
        onNext={onNext} 
        onPrevious={onPrevious}/>
      </div>
      
    </div>
    </>
  );
}

export default App;
