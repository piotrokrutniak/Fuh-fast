import React,{ useState } from "react";
import {ofertaOne,ofertaTwo,ofertaThree} from '../Data/Data';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Panels from "../Panels/Panels";
import Footer from "../Footer/Footer";
import InfoSpacing from "../Footer/InfoSpacing";
import Contact from "../Contact/Contact";
import { FaPhone } from 'react-icons/fa';
import Post from "../Post/Post";
export default function Kontakt(){
    const [isOpen,setIsOpen] = useState(false);
    console.log({...ofertaOne})
    function changeState(){
    setIsOpen(oldState=>!oldState)
    }
    return (
        <>
            <Sidebar change={changeState} isOpen={isOpen}/>
            <Navbar change={changeState} openValue={isOpen}/>
            
            <Post {...ofertaOne}/>
            <Post {...ofertaTwo}/>
            <Post {...ofertaThree}/>
            <Contact>Skontaktuj się z nami: +48 697988875 <FaPhone></FaPhone></Contact>
            <Footer/>
            <InfoSpacing/>
        </>
    )
}