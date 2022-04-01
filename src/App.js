import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import React, {useState} from 'react';
import HomeHero from './HomeHero/HomeHero';
import Contact from "./Contact/Contact";
import {FaPhone} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Post from './Post/Post';
import {postOne, awardsData} from './Data/Data';
import Awards from './Awards/Awards';
import Footer from './Footer/Footer';
import InfoSpacing from './Footer/InfoSpacing';



function App() {

  const [isOpen,setIsOpen] = useState(false);
  console.log({...postOne})
function changeState(){
  setIsOpen(oldState=>!oldState)
  
  
}


  return (
    <Router>
      <Sidebar change={changeState} isOpen={isOpen}/>
      <Navbar change={changeState} openValue={isOpen}/>
      <HomeHero/>
      <Contact>Skontaktuj się z nami: +48 697988875 <FaPhone></FaPhone></Contact>
      <Post {...postOne}/>
      <Awards {...awardsData}/>
      <Footer/>
      <InfoSpacing/>
    </Router>
  );
}

export default App;
