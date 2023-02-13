import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './hooks/useLocalStorage'

import Home from './pages/Home';
import Menu from './components/Menu';
import './css/app.css';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';

function App() {
  const [technos, setTechnos] = useState([]);
  const STORAGE_KEY = 'technos'; 
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

  useEffect(() =>{
    console.log('useEffect with []');
    setTechnos(storedTechnos);
  }, []);

  useEffect(() => {
    console.log('useEffect with [technos]');
    setStoredTechnos(technos);
  }, [technos]);
  // [{name: 'React', description: 'Learn react'}, {name: 'Node', category: 'back', decsription: 'Learn Node'},....]

  function handleAddTechno(techno) {
    console.log('handleAddTechno', techno);
    setTechnos([...technos, {...techno, technoid: uuidv4()}]);
  }

  function handleDeleteTechno(id){
    setTechnos(technos.filter((tech) => tech.technoid !== id));
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<TechnoAdd handleAddTechno={handleAddTechno}/>} />
        <Route path='/list' element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno}/>} />
      </Routes>
      
    </>
    
  );
}

export default App;
