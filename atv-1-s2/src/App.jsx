import { useEffect } from 'react'
import { useState } from 'react'
import {Characters} from './Components/Characters'
import axios from 'axios'
import './styles/index.css'

function App() {
  const [charList, setCharList] = useState([])
  const [page, setPage] = useState(1)
  useEffect(()=>{
    async function loadCharacters(){
      try{
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);  
        setCharList(response.data.results)  
      }
      catch(error){
        console.log(error)  // ... 
      }
    }
    loadCharacters()

  },[page])
  const nextPage = () => {
    setPage(page + 1)
  }
  const previousPage = () => {
    setPage(page - 1)
  }
  return (
    <>
      <header> RickAndMortyAPI </header>
      <div className='app'>
        
        <Characters charList = {charList} />
        <div className='buttons'>
          
          {
            page>1 && <button onClick={previousPage}> prev</button>
          }
          {
            page<42 && <button onClick={nextPage}> next </button>
          }


      </div>
      </div>
      
    </>
    

  )
}

export default App
