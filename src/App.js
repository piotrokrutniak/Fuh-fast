
import './App.css';

import {BrowserRouter as Router,Routes as Switch,Route} from 'react-router-dom';

import React, {useState} from 'react';

import {postOne, awardsData} from './Data/Data';

import Home from './Home';
import Oferta from './Pages/Oferta';
import Kontakt from './Pages/Contact';

function App() {

  const [isOpen,setIsOpen] = useState(false);
  console.log({...postOne})
function changeState(){
  setIsOpen(oldState=>!oldState)
  
  
}


  return (
    <Router>
        <Switch>
        <Route path="/" element={<Home/>} exact />
        <Route path="/oferta" element={<Oferta/>} exact />
        <Route path="/kontakt" element={<Kontakt/>} exact />
        </Switch>
            
    </Router>
  );
}

export default App;
